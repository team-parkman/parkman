const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CoordinateSchema = schema({
  latitude: Number,
  longitude: Number,
  
}, { _id: false })

const TransactionsSchema = schema({
      
  customerName: {
    type: String
  },
  date: {
    type: Date
  },
  amount: {
    type: Number
  },
  status: {
    type: String
  },   
}, { _id: false })

const BusinessDataSchema = schema({
  businessName: {
      type: String,
      require: true
  },
  businessType: {
      type: String,
      require: true
  },
  businessAddress: {
      type: String,
      require: true
  },
  addressCoordinate: {
      type: CoordinateSchema,
      require: true
  },
  businessPhone: {
      type: String,
      require: true
  },
  imgUrl: {
    type: String,
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  ratings: [Number],
  transactions:[TransactionsSchema],
})

const BusinessSchema = schema({
  ownerId: {
    type: String,
    require: true
  },
  businesses : [BusinessDataSchema]
})

const Business = mongoose.model("business", BusinessSchema);
module.exports = Business;