const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Business = require("../models/business.model");
const { findOneAndUpdate } = require("../models/verifyUser.model");


/*****
 * ADDING BUSINESS 
 ****/
router.post("/", (req, res) => {
  
  let { ownerId, businessName, businessType, businessAddress, addressCoordinate, businessPhone, imgUrl, description, price } = req.body;
  
  //Trim any white space in user input
  businessName = businessName.trim();
  businessType = businessType.trim();
  businessAddress = businessAddress.trim();
  businessPhone = businessPhone.trim();
  description = description.trim();

    //check if any required field is empty
  if (businessName == "" || businessType== "" || businessAddress == "" || description == "") {
    return res.status(400).json({
      status: "FAILED",
      message: "Empty input field"
    });
  }else if(!ownerId || !addressCoordinate || !price) {
    return res.status(500).json({
      status: "FAILED",
      message: "OwnerID or Coordinates or Price missing!"
    })
  }else{
    //check if business name already exists
    Business.findOne({ 
      businesses: {
        $elemMatch: { businessName: businessName }
      }
    })
    .then((result)=> {
      if (result) {
        return res.status(400).json({
          statusText: "FAILED",
          message: "Business name already exist"
        });
      } else {
        //check if user already has a business registered then append to business array else create
        const businessData = {
          businessName,
          businessType,
          businessAddress,
          addressCoordinate,
          businessPhone,
          imgUrl,
          description,
          price,
        }
        Business.findOne({ ownerId })
        .then((result) => {
          if (result) {
            Business.findOneAndUpdate(
              { ownerId }, 
              { "$push": {"businesses": businessData}},
              {new: true, safe: true })
              .then((result) => {
                return res.status(201).json({
                  status: "SUCCESS",
                  message: "Bussiness data updated successfully",
                  data: result
                });
              })
              .catch((error) => {
                return res.status(500).json({
                  status: "FAILED",
                  message: "Failed to update Business data",
                  data: error.message
                });
              });
          }else{
            const newBusiness = new Business({
              ownerId,
              businesses:[
                businessData
              ]
            })
            newBusiness.save()
            .then((result) => {
              return res.status(201).json({
                status: "SUCCESS",
                message: "Bussiness data Created successfully",
                data: result
              });
            })
            .catch((error) => {
              return res.status(500).json({
                status: "FAILED",
                message: "Failed to create Business data",
                error: error.message
              })
            })
            
          }
        })
        .catch((error) => {
          return res.status(500).json({
            status: "FAILED",
            message: "Error finding document",
            error: error.message
          })
        })
        
      }
    })
    .catch((error) => {
      return res.status(500).json({
        status: "FAILED",
        message: "Error finding document",
        error: error.message
      })
    })
  }

})


/*****
 * REMOVING A BUSINESS
 ****/

router.patch("/:ownerId/:businessId", (req, res) => {
  let { ownerId, businessId } = req.params;
  // console.log({ownerId, businessId})

  Business.findOne({
    $and:[
      {ownerId: ownerId},
      { businesses: { $elemMatch: { _id: businessId }}}
    ]
  })
  .then((result) => {
    if (result) {
      Business.findOneAndUpdate(
        { ownerId },
        { "$pull": { "businesses": { _id: businessId }}},
        { new: true, safe: true}
      )
      .then((result) => {
        return res.status(201).json({
          status: "SUCCESS",
          message: "Business removed successfully",
          data: result
        })
      })
      .catch((error) => {
        return res.status(500).json({
          status: "FAILED",
          message: "Error removing business",
          error: error.message
        })
      })
    } else {
      return res.status(400).json({
        message: "Error bussiness not found"
      })
    }
  })
  .catch((error) => {
    return res.status(500).json({
      status: "FAILED",
      message: "Error finding document",
      error: error.message
    })
  })
})


/*****
* GET ALL BUSINESS IN DATABASE
 ****/
router.get("/", (req, res) => {
  Business.find({})
  .then((results) => {
    const allBussiness = [];
    results.map((result) => {
      let { businesses } = result;
      businesses.map((business) => {
        allBussiness.push(business)
      })
    })
    return res.status(201).json({
      status: "SUCCESS",
      message: "Documents found",
      data: allBussiness
    })
  })
  .catch((error) => {
    res.status(400).json({
      status: "FAILED",
      message: "Error finding douments",
      error: error.message
    })
  })
})


/*****
* GET ALL BUSINESS OF A USER
 ****/



/*****
* GET DETAILS OF A PARTICULAR BUSINESS
 ****/






module.exports = router