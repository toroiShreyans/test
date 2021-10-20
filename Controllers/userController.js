
const mongoose = require("mongoose")

const userModel = require("../Models/user.Model")
const jwt = require("jsonwebtoken");
// const Auth = require("../Middleware/auth");
exports.Adduser = async (req, res) => {
   try {
    const {
        orderid,
        orderamount,
        ordercurrency
    } = req.body;

    const User = new userModel({
        orderid,
        orderamount,
        ordercurrency
    });

    const token = await User.generateAuthToken();
    console.log(`the token part ${token}`);
    console.log("raja")

    console.log(User);
    await User.save().then((result) => {
        return res.status(201).json({
         result
        });
      }).catch(e => {
        return res.status(400).json({
          mesaage: e
        }); 
    })
   } catch (error) {
       messgae: error
   }
}