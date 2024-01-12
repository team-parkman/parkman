const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ParkingLotSchema = schema({
    lotName:{
        type: String,
        require: true
    },
    lotAddress:{
        type: String,
        require: true
    },
    lotVehicleCapacity:{
        type: Number,
        require: true
    },
   
})

const ParkingLot = mongoose.model("parkinglot", ParkingLotSchema);
module.exports = ParkingLot;