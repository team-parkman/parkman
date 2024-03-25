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

const SendVerificationEmail = async ({ _id, email }, res) => {
  try {
    const currentUrl = "http://localhost:5000";
    _id = _id.toString();
    const uniqueString = uuidv4() + _id;

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
    const hashedUniqueString = await bcrypt.hash(uniqueString, saltRounds);

    const verifyUser = new UserVerification({
      userId: _id,
      uniqueString: hashedUniqueString,
      createdAt: Date.now(),
      expiresAt: Date.now() + 21600000
    });

    await verifyUser.save();

    await transporter.sendMail(mailOptions);

    await User.findOneAndUpdate({ email }, { userId: _id });

    return res.status(200).send({
      status: "PENDING",
      message: "Verification email sent"
    });
  } catch (error) {
    return res.status(500).send({
      status: "FAILED",
      message: error.message || "An error occurred"
    });
  }
};


module.exports = SendVerificationEmail;
