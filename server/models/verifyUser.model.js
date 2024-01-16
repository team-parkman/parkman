const mongoose = require("mongoose");
const schema = mongoose.Schema;

const VerifyUserSchema = schema({
  userId: {
    type: String
  },
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

const VerifyUser = mongoose.model("verifyuser", VerifyUserSchema);
module.exports = VerifyUser;
