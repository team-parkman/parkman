const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Disable mongoose automatic type casting before save
mongoose.SchemaTypes.Number.cast(false)
mongoose.SchemaTypes.String.cast(false);

const CoordinateSchema = schema({
  latitude: Number,
  longitude: Number,
  
}, { _id: false })

const TransactionsSchema = schema({
      
  customerName: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
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
  createdAt: {
    type:Date,
    default:Date.now
  },
  ratings: {
    type: [{
      type: Number,
      min: [1, "Must be at least 1, got {VALUE}"],
      max: [5, "Must be at most 5, got {VALUE}"]
    }]
  },
  transactions:[TransactionsSchema],
}, )

const BusinessSchema = schema({
  ownerId: {
    type: schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  businesses : [BusinessDataSchema]
})

const Business = mongoose.model("business", BusinessSchema);
module.exports = Business;