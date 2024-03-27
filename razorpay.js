
let Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config();

const razorpayInstance = new Razorpay({ 
    key_id: process.env.Razorpay_Key_Id,
    key_secret: process.env.Razorpay_Key_Secret
})


module.exports = {razorpayInstance};













