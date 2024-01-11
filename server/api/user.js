const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user.model");

router.post("/signup", (req, res) => {
  //Taking inputs from request body
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
    User.findOne({ where: { email: req.body.email } })
      .then((result) => {
        if (result) {
          return res.json({
            statusText: "FAILED",
            message: "User already exist"
          });
        } else {
          //handle password hashing
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
                  status: "User successfully saved",
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

module.exports = router
