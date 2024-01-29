const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const path = require("path");

const User = require("../models/user.model");
const UserVerification = require("../models/verifyUser.model");
const SendVerificationEmail = require("../utils/emailVerification");

router.post("/signup", (req, res) => {
  let { username, email, phoneNumber, userType, businessName, businessType, businessAddress, password } = req.body;

  //Trim any white space in user input
  username = username.trim();
  email = email.trim();
  phoneNumber = phoneNumber.trim();
  userType = userType.trim();
  businessName = businessName.trim();
  businessType = businessType.trim();
  businessAddress = businessAddress.trim();
  password = password.trim();

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
                userId: "",
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

              newUser.save().then((result) => {
                // handle send email verification link
                SendVerificationEmail(result, res);
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
  let { userId } = req.params;

  //check if user verification record exist
  UserVerification.findOne({ userId })
    .then((result) => {
      if (result.expiresAt < Date.now()) {
        //delete user verification link if expired
        UserVerification.findOneAndDelete({ userId })
          .then((result) => {
            User.findOneAndDelete({ userId })
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
            let message = "An error occured while clearing expired user verification record";
            res.redirect(`/user/verified/error=true&message=${message}`);
          });
      } else {
        //change user verified status to true
        User.findOneAndUpdate({ userId }, { verified: true })
          .then(() => {
            UserVerification.findOneAndDelete({ userId })
              .then(() => {
                res.sendFile(path.join(__dirname, "./../views/verified.html"));
              })
              .catch((error) => {
                let message = "An error occured while deleting verified user  record";
                res.redirect(`/user/verified/error=true&message=${message}`);
              });
          })
          .catch((error) => {
            let message = "An error occured while updating record";
            res.redirect(`/user/verified/error=true&message=${message}`);
          });
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
