const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { success, error } = require("consola");
const dbConnection = require("./config/db");

const user = require("./api/user");

const app = express();
const PORT = process.env.PORT || 5000;

//initialize db connection
dbConnection();

//parse request body for accepting form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set CORS for all hearders
app.use(cors());

app.use("/api", user);

app.listen(PORT, () => {
  if (!PORT) {
    error({ message: `Application fail to run`, badge: true });
  } else {
    success({ message: `Application is running on port ${PORT}`, badge: true });
  }
});
