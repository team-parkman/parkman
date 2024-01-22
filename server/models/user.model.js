const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = schema({
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
  userType: {
    type: String,
    require: true
  },
  businessName: {
    type: String
  },
  businessType: {
    type: String
  },
  businessAddress: {
    type: String
  },
  password: {
    type: String,
    require: true
  }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
