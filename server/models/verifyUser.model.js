const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.SchemaTypes.String.cast(false);

const VerifyUserSchema = new Schema({
  userId: {
    type: String
  },
  // email: {
  //   type: String
  // },
  uniqueString: {
    type: String
  },
  createdAt: {
    type: Date
  },
  expiresAt: {
    type: Date
  }
});

const UserVerification = mongoose.model("verifyuser", VerifyUserSchema);
module.exports = UserVerification;
