const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Business = require("../models/business.model");
const { default: mongoose } = require("mongoose");


/*****
* GET ALL BUSINESS IN DATABASE
 ****/
router.get("/", async (req, res) => {
  try {
    const result = await Business.aggregate([
      { $unwind: "$businesses" }, // Unwind array to have one document per subdocument
      { $project: { _id: 0, businesses: 1 }} // Project only the businesses field, excluding _id
    ]);

    return res.status(200).json({
      status: "SUCCESS",
      message: "Documents found",
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
});


/*****
* GET ALL BUSINESS OF A USER
 ****/
router.get("/owner/:ownerId", async (req, res) => {
  try {
    const { ownerId } = req.params;

    const result = await Business.findOne({ ownerId }, { businesses: 1, _id: 0 });

    if (!result) {
      return res.status(404).json({
        status: "FAILED",
        message: "Document not found"
      });
    }

    return res.status(200).json({
      status: "SUCCESS",
      message: "Document found",
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
});


/*****
* GET DETAILS OF A PARTICULAR BUSINESS
 ****/
router.get("/:businessId", async (req, res) => {
  try {
    const { businessId } = req.params;

    const objectId = new mongoose.Types.ObjectId(businessId);

    const result = await Business.aggregate([
      { $unwind: "$businesses" }, // Unwind array to have one document per subdocument
      { $match: { "businesses._id": objectId }},
      { $project: { _id: 0, businesses: 1 }}
    ]);

    if (!result || result.length === 0) {
      return res.status(404).json({
        status: "FAILED",
        message: "Document not found"
      });
    }

    return res.status(200).json({
      status: "SUCCESS",
      message: "Document found",
      data: result[0] //A single document based on businessId
    });
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
});


/*****
* GET AVERAGE RATING OF A BUSINESS
 ****/
router.get("/rating/:businessId", async (req, res) => {

  try {
    let { businessId } = req.params;
    businessId = new mongoose.Types.ObjectId(businessId);

    const result = await Business.aggregate([
      { $unwind: "$businesses" }, 
      { $match: { "businesses._id": businessId } }, 
      { $unwind: "$businesses.ratings" }, 
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$businesses.ratings" } // Calculate the average rating
        }
      }
    ]);

    if (!result || result.length === 0) {
      return res.status(404).json({
        status: "FAILED",
        message: "Document not found"
      });
    }
    return res.status(200).json({
      status: "SUCCESS",
      message: "Document found",
      data: result[0] //A single document based on businessId
    });

  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }

});


/*****
 * ADDING BUSINESS 
 ****/
router.post("/", async (req, res) => {
  try {
    let { ownerId, businessName, businessType, businessAddress, addressCoordinate, businessPhone, imgUrl, description, price } = req.body;

    // Trim any white space in user input
    businessName = businessName.trim();
    businessType = businessType.trim();
    businessAddress = businessAddress.trim();
    businessPhone = businessPhone.trim();
    description = description.trim();

    // Check if any required field is empty
    if (!ownerId || !businessName || !businessType || !businessAddress || !addressCoordinate || !businessPhone || !description || !price) {
      return res.status(400).json({
        status: "FAILED",
        message: "Empty input field"
      });
    }

    const user = await User.findOne({ userId: ownerId });
    if (!user) {
      return res.status(400).json({
        status: "FAILED",
        message: "Owner of Business not found"
      });
    }

    const businessExists = await Business.findOne({ "businesses.businessName": businessName });
    if (businessExists) {
      return res.status(400).json({
        status: "FAILED",
        message: "Business name already exists"
      });
    }

    // Convert string to actual objectID
    ownerId = new mongoose.Types.ObjectId(ownerId);

    let businessData = {
      businessName,
      businessType,
      businessAddress,
      addressCoordinate,
      businessPhone,
      imgUrl,
      description,
      price,
    };

    let updatedBusiness;
    const business = await Business.findOne({ ownerId });
    if (business) {
      updatedBusiness = await Business.findOneAndUpdate(
        { ownerId },
        { $push: { businesses: businessData } },
        { new: true, runValidators: true, select: '-_id' }
      );
    } else {
      const newBusiness = new Business({
        ownerId,
        businesses: [businessData]
      });
      updatedBusiness = await newBusiness.save();
    }

    return res.status(201).json({
      status: "SUCCESS",
      message: business ? "Business data updated successfully" : "Business data created successfully",
      data: updatedBusiness
    });

  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
});


/*****
* SAVE TRANSACTIONS
 ****/
router.patch("/transact/:businessId", async (req, res) => {
  try {
    let { businessId } = req.params;
    businessId = new mongoose.Types.ObjectId(businessId);
    const { customerName, amount, status } = req.body;

    if (!customerName || !amount || !status){
      return res.status(400).json({
        status: "FAILED",
        message: "Empty field"
      });
    }

    const transactionData = {
      customerName,
      amount,
      status
    }

    const updatedBusiness = await Business.findOneAndUpdate(
      { "businesses": { $elemMatch: { "_id": businessId } } },
      { $push: { "businesses.$.transactions": transactionData } },
      { new: true, runValidators: true }
    );

    const updatedBusinessObj = updatedBusiness.businesses.find(business => business._id.toString() === businessId.toString());

    return res.status(200).json({
      status: "SUCCESS",
      message: "Transacton added successfully",
      data: updatedBusinessObj
    })

  }catch(error){
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
  
})


/*****
* RATE A BUSINESS
 ****/
router.patch("/rate/:businessId", async (req, res) => {
  try {
    const { rating } = req.body;
    const { businessId } = req.params;

    const result = await Business.findOneAndUpdate(
      { 'businesses._id': businessId }, // Find the business document with the specified subdocument _id
      { $push: { 'businesses.$.ratings': rating }}, // Append the new rating to the ratings array of the specified subdocument
      { new: true, runValidators: true } // runvalidators enables validation for update, off by default  
    );

    if (result) {
      return res.status(200).json({
        status: "SUCCESS",
        message: "Rating added successfully",
        data: result
      });
    } else {
      return res.status(404).json({
        status: "FAILED",
        message: "Business not found"
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
});


/*****
 * REMOVING A BUSINESS
 ****/
router.patch("/:businessId", async (req, res) => {
  try {
    const { businessId } = req.params;

    const result = await Business.findOne(
      { businesses: { $elemMatch: { _id: businessId }}}
    );

    if (result) {
      const updatedResult = await Business.findOneAndUpdate(
        { 'businesses._id': businessId },
        { $pull: { businesses: { _id: businessId }}},
        { new: true }
      );

      return res.status(200).json({
        status: "SUCCESS",
        message: "Business removed successfully",
        data: updatedResult
      });
    } else {
      return res.status(404).json({
        status: "FAILED",
        message: "Business not found"
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "FAILED",
      message: "Internal server error",
      error: error.message
    });
  }
});


module.exports = router