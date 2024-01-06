const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PersonalUserSchema = schema({
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
    confirmPassword:{
        type: String
    },
})

const PersonalUser = mongoose.model("personalUser", PersonalUserSchema);
module.exports = PersonalUser;