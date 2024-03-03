const mongoose = require("mongoose");
const { success, error } = require("consola");

require("dotenv").config();

// Set up global middleware to exclude __v field from all query results
mongoose.plugin(function (schema) {
  schema.options.toJSON = {
    transform: function (doc, ret) {
      delete ret.__v;
      return ret;
    }
  };
});


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    success({ message: "Database Connected", badge: true });
  } catch (err) {
    error({ message: "Connection to database failed", badge: true, error: err });
  }
};

module.exports = dbConnection;