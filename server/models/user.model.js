const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    userType:{
        type: String,
        require: true
    }
})

const User = mongoose.model("user", UserSchema);
module.exports = User;