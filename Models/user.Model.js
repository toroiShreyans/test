const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
require("dotenv").config();



const userSchema = new mongoose.Schema({
    orderid:{
        type: String,
        required: true
    },
   orderamount:{
     type: Number,
     required: true
   } ,
   ordercurrency:{
     type: String,
     required: true
   },
   tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]

})

userSchema.methods.generateAuthToken = async function () {
    try {
      console.log(this._id);
      const token = jwt.sign(
        { _id: this._id.toString() },
        process.env.SECRET_KEY
      );
      this.tokens = this.tokens.concat({ token: token });
      await this.save();
      console.log(token);
      return token;
    } catch (error) {
      //res.send(`the error part ${error}`);
      console.log(`the error part ${error}`);
    }
  };

module.exports = mongoose.model("User", userSchema);