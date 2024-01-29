const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const UserVerification = require("../models/verifyUser.model");
const User = require("../models/user.model");
const { response } = require("express");

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
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to use");
//     console.log(success);
//   }
// });

const SendVerificationEmail = ({ _id, email }, res) => {
  const currentUrl = "http://localhost:5000";
  const uniqueString = uuidv4() + _id;

  //console.log("uniqueString1", uniqueString);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email to complete your sign up and log into your account </p>
          <p>This link <b>expires in 6 hours</b>. </P> 
          <p><a href= ${currentUrl + "/user/verify/" + _id + "/" + uniqueString} >Verify here</a>
          to proceed</p>  
    `
  };

  const saltRounds = 10;
  bcrypt
    .hash(uniqueString, saltRounds)
    .then((hashedUniqueString) => {
      //console.log("hashedUniqueString", hashedUniqueString);
      const verifyUser = new UserVerification({
        userId: _id,
        //email,
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
                // update userId 
              User.findOneAndUpdate({ email }, { userId: _id }).then((response) => {
                //console.log(response);
                return res.status(200).send({
                  statusText: "PENDING",
                  message: "Verification email sent"
                });
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

module.exports = SendVerificationEmail;
