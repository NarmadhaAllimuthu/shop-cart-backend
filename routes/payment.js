
var express = require('express');
const { razorpayInstance } = require('../razorpay');
var router = express.Router();

router.get('/create-order', async(req,res,next) =>{
    try{
        console.log(req.query.amount);
        const totalAmount = req.query.amount;

      const order =await razorpayInstance.orders.create({
            amount: parseInt(totalAmount)*100,
            currency: "INR",
            receipt: "receipt#1",
            payment_capture: 1,
        })
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.json(order);
    }catch(err){
        console.log(err)
       res.status(500).send(err.message);
    }
 
});

module.exports = router;







