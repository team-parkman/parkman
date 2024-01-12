const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user.model");

router.post("/signup", (req, res) => {
  //Accept inputs from request body
  let { username, email, password, userType } = req.body;

  //Trim of any white space
  username = username.trim();
  email = email.trim();
  password = password.trim();
  userType = userType.trim();

  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  //check if any required field is empty
  if (username == "" || email == "" || password == "" || userType == "") {
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
                password: hashedPassword,
                userType
                //verified: false,
              });

              //create new user
              newUser.save().then((result) => {
                return res.json({
                  statusText: "User successfully saved",
                  data: result
                });
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
      }else{
            return res.status(500).send({
              statusText: "FAILED",
              message: "Invalid email address"
            });
      }
    });
  }
});

module.exports = router;
