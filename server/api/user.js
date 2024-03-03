const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const path = require("path");

const User = require("../models/user.model");
const UserVerification = require("../models/verifyUser.model");
const SendVerificationEmail = require("../utils/emailVerification");


/*****
 * VERIFIED PAGE
 *****/
router.get("/verified", (req, res) => {
  const { error, message } = req.query;

  if (error) {
    if (message === "Not Found") {
      return res.status(404).json({
        status: "FAILED",
        message: message
      });
    }else if ( message === "Invalid link"){
      return res.status(404).json({
        status: "FAILED",
        message: message
      });
    }else if (message === "Link expired. Please sign up") {
      return res.status(410).json({
        status: "FAILED",
        message: message
      });
    } 

    return res.status(500).json({
      status: "FAILED",
      message: message
    });
  }

  return res.sendFile(path.join(__dirname, "../views/verified.html"));
});


/*****
 * VERIFY EMAIL
 *****/
router.get("/verify/:userId/:uniqueString", async (req, res) => {
  try {
    const { userId, uniqueString } = req.params;

    const userVerificationRecord = await UserVerification.findOne({ userId });

    if (!userVerificationRecord) {
      throw new Error("User verification record not found");
    }

    const hashedUniqueString = userVerificationRecord.uniqueString;
    const uniqueStringMatch = await bcrypt.compare(uniqueString, hashedUniqueString);

    if (!uniqueStringMatch) {
      throw new Error("Unique string does not match");
    }

    if (userVerificationRecord.expiresAt < Date.now()) {
      await UserVerification.findOneAndDelete({ userId });
      await User.findOneAndDelete({ userId });
      const errorMessage = "Link expired. Please sign up";
      return res.redirect(`/user/verified?error=true&message=${encodeURIComponent(errorMessage)}`);
    }

    await User.findOneAndUpdate({ userId }, { verified: true });
    await UserVerification.findOneAndDelete({ userId });
    return res.sendFile(path.join(__dirname, "./../views/verified.html"));

  } catch (error) {
    console.error(error);

    let errorMessage = "";
    if (error.message === "User verification record not found") {
      errorMessage = "Not Found";
    } else if (error.message === "Unique string does not match") {
      errorMessage = "Invalid link";
    } else {
      errorMessage = "An error occurred while processing the request";
    }

    return res.redirect(`/user/verified?error=true&message=${encodeURIComponent(errorMessage)}`);
  }
});


/*****
 * SIGN UP
 *****/
router.post("/signup", async (req, res) => {
  try {
    let { username, email, phoneNumber, password } = req.body;

    username = username.trim();
    email = email.trim();
    phoneNumber = phoneNumber.trim();
    password = password.trim();

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (username === "" || email === "" || phoneNumber === "" || password === "") {
      return res.json({
        status: "FAILED",
        message: "Empty input field"
      });
    }

    // Validate email address
    if (!regex.test(email)) {
      return res.json({
        status: "FAILED",
        message: "Invalid email address"
      });
    }

    // Check password length
    if (password.length < 8) {
      return res.json({
        status: "FAILED",
        message: "Password is too short"
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        status: "FAILED",
        message: "User already exists"
      });
    }

    // Handle password hashing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      userId: "",
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      verified: false
    });

    const result = await newUser.save();

    // Handle sending email verification link
    SendVerificationEmail(result, res);
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: error.message || "Some error occurred while creating user"
    });
  }
});


/*****
 * SIGN IN
 *****/
router.post("/signin", async (req, res) => {
  try {
    let { email, password } = req.body;

    // Trim white space
    email = email.trim();
    password = password.trim();

    if (email === "" || password === "") {
      return res.json({
        status: "FAILED",
        message: "Empty credentials"
      });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "FAILED",
        message: "Invalid email address or password"
      });
    }

    const hashedPassword = user.password;
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      if (!user.verified) {
        return res.status(403).json({
          status: "FAILED",
          message: "Email has not yet been verified. Please check your inbox!"
        });
      }
      // Omit password from user object
      user.password = undefined;
      return res.status(200).json({
        status: "SUCCESS",
        message: "Sign-in successful",
        data: user
      });
    } else {
      return res.status(401).json({
        status: "FAILED",
        message: "Invalid email address or password"
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: error.message || "An error occurred"
    });
  }
});


module.exports = router;
