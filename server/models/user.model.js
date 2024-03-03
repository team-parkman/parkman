const mongoose = require("mongoose");
const schema = mongoose.Schema;

mongoose.SchemaTypes.String.cast(false);

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
  createdAt: {
    type: Date,
    default: Date.now
  },
  verified: {
    type: Boolean,
    require: true
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
