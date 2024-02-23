const mongoose = require("mongoose");
const schema = mongoose.Schema;


const UserSchema = schema({
  userId:{
    type: String
  },
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  verified: {
    type: Boolean,
    require: true
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
