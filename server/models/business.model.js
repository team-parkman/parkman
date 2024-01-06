const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BusinessOwnerSchema = schema({
    businessName:{
        type: String,
        require: true
    },
    businessEmail:{
        type: String,
        require: true
    },
    businessType:{
        type: String,
        require: true
    },
    Address:{
        type: String,
        require: true
    },
    phoneNumber:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    confirmPassword:{
        type: String
    }
})

const BusinessOwner = mongoose.model("business", BusinessOwnerSchema);
module.exports = BusinessOwner;