const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const User = require("../models/user.model");
const VerifyUser = require("../models/verifyUser.model");

require("dotenv").config();

//create a transportter
let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 5000,
  secure: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  },
  tls: {
    rejectUnAuthorize: true
  }
});

//test transport
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to use");
    console.log(success);
  }
});

//send verification email
const SendVerificationEmail = ({ _id, email }, res) => {
  const currentUrl = "http://localhost:5000";
  const uniqueString = uuidv4 + _id;

  //mail options
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email to complete your sign up and log into your account </p>
          <p>This link <b>expires in 6 hours</b> </P> 
          <p><a href= ${currentUrl + "/user/verify/" + _id + "/" + uniqueString} >Verify here</a>
          to proceed</p>  
    `
  };

  //hash the unique string
  const saltRounds = 10;
  bcrypt
    .hash(uniqueString, saltRounds)
    .then((hashedUniqueString) => {
      //set values in user verification function
      const verifyUser = new VerifyUser({
        userId: _id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000
      });

      verifyUser
        .save()
        .then(() => {
          transporter
            .sendMail(mailOptions)
            .then(() => {
              return res.status(200).send({
                // email sent and verification record saved
                statusText: "PENDING",
                message: "Verification email sent"
              });
            })
            .catch((error) => {
              return res.status(500).send({
                statusText: "FAILD",
                message: error.message || "Email not send"
              });
            });
        })
        .catch((error) => {
          return res.status(500).send({
            statusText: "FAILED",
            message: error.message || "Verification failed"
          });
        });
    })
    .catch((error) => {
      return res.status(500).send({
        statusText: "FAILED",
        message: error.message || "An error occured"
      });
    });
};

router.post("/signup", (req, res) => {
  //Accept inputs from request body
  let { username, email, phoneNumber, userType, businessName, businessType, businessAddress, password } = req.body;

  //Trim of any white space
  username = username.trim();
  email = email.trim();
  phoneNumber = phoneNumber.trim();
  userType = userType.trim();
  businessName = businessName.trim();
  businessType = businessType.trim();
  businessAddress = businessAddress.trim();
  password = password.trim();

  // let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //check if any required field is empty
  if (username == "" || email == "" || phoneNumber == "" || password == "" || userType == "") {
    return res.json({
      status: "FAILED",
      message: "Empty input field"
    });

    //validate email address
  } else if (!regex.test(email)) {
    return res.json({
      status: "FAILED",
      message: "Invalid email address"
    });
  } else if (password.length < 8) {
    return res.json({
      status: "FAILED",
      message: "Password is too short"
    });
  } else {
    //check if user already exist
    User.findOne({ email })
      .then((result) => {
        if (result) {
          return res.json({
            statusText: "FAILED",
            message: "User already exist"
          });
        } else {
          //handle password hashing 053546
          const saltRounds = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              const newUser = new User({
                username,
                email,
                phoneNumber,
                userType,
                businessName,
                businessType,
                businessAddress,
                password: hashedPassword,
                verified: false
              });

              //create new user
              newUser.save().then((result) => {
                //Send a verification email
                SendVerificationEmail(result, res);
                // return res.json({
                //   statusText: "User successfully saved",
                //   data: result
                // });
              });
            })
            .catch((error) => {
              return res.status(500).send({
                statusText: "FAILED",
                message: error.message || "Some error occurred while creating user"
              });
            });
        }
      })
      .catch((error) => {
        return res.json({
          statusText: "FAILED",
          message: error.message || "Error occured"
        });
      });
  }
});

//verify email route
router.get("/verify/:userId/:uniqueString", (req, res) => {
  let { userId, uniqueString } = req.params;

  //check if user verification record exist
  VerifyUser.findOne({ userId })
    .then((result) => {
      if (result.length > 0) {
        //check if the link has expires or is still valid
        const { expiresAt } = result;
        const hashedUniqueString = result.uniqueString;

        if (expiresAt < Date.now()) {
          //delete user verification link if expired
          VerifyUser.deleteOne({ userId })
            .then((result) => {
              User.deleteOne({ _id: userId })
                .then(() => {
                  let message = "link expired. Please sign up";
                  res.redirect(`/user/verified/error=true&message=${message}`);
                })
                .catch((error) => {
                  let message = "An error occured while clearing user verification record";
                  res.redirect(`/user/verified/error=true&message=${message}`);
                });
            })
            .catch((error) => {
              //
              let message = "An error occured while clearing expired user verification record";
              res.redirect(`/user/verified/error=true&message=${message}`);
            });
        } else {
          // if link not expired, compare the hashUniqueString with uniqueString from the record
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                // string matched then update the user record and change the value of verified to TRUE
                User.updateOne({ _id: userId }, { verified: true })
                  .then(() => {
                    VerifyUser.deleteOne({ userId })
                      .then(() => {
                        res.sendFile(path.join(__dirname, "../../views/verfied.html"));
                      })
                      .catch((error) => {
                        console.log(error);
                        let message = "An error occured while deleting verified user  record";
                        res.redirect(`/user/verified/error=true&message=${message}`);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                    let message = "An error occured while updating record";
                    res.redirect(`/user/verified/error=true&message=${message}`);
                  });
              } else {
                //string not match
                let message = "Invalid verification string.";
                res.redirect(`/user/verified/error=true&message=${message}`);
              }
            })
            .catch((error) => {
              console.log(error);
              let message = "An error occured while comparing uniqueString";
              res.redirect(`/user/verified/error=true&message=${message}`);
            });
        }
      } else {
        //user verification record not existing
        let message = "user verification record not found or has been verified. Please sign up or login";
        res.redirect(`/user/verified/error=true&message=${message}`);
      }
    })
    .catch((error) => {
      console.log(error);
      let message = "An error occured while checking for existing user verification record";
      res.redirect(`/user/verified/error=true&message=${message}`);
    });
});

//Verified page route
router.get("/verified", (req, res) => {
  return res.sendFile(path.join(__dirname, "../../views/verified.html"));
});

//USER LoGIN
router.post("/signin", (req, res) => {
  //accept in requst request body
  let { email, password } = req.body;

  //trim white space
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    return res.json({
      statusText: "FAILED",
      message: "Empty credentials"
    });
  } else {
    //check if user exist
    User.findOne({ email }).then((data) => {
      if (data) {
        if (!data.verified) {
          return res.json({
            statusText: "FAILED",
            message: "Email has not yet bee verified. Please check your inbox!"
          });
        } else {
          const hashedPassword = data.password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                return res.status(200).send({
                  statusText: "SUCCESS",
                  message: "Signin successfully",
                  data
                });
              } else {
                return res.status(500).send({
                  statusText: "FAILED",
                  message: "Invalid Password"
                });
              }
            })
            .catch((error) => {
              return res.status(500).send({
                statusText: "FAILED",
                message: error.message || "An error occurred"
              });
            });
        }
      } else {
        return res.status(500).send({
          statusText: "FAILED",
          message: "Invalid email address"
        });
      }
    });
  }
});

module.exports = router;
