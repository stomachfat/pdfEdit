var express = require('express');
var router = express.Router();
var stripeSecretKey = require('../../config/current.env.js').stripeSecretKey;
var stripe = require("stripe")(stripeSecretKey);


/* GET users listing. */
router.post('/paymentToken', function(req, res, next) {
  let amount = 100;

  console.log('paymentToken req.body:', req.body);
  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    }))
  .then(charge => {
    console.log('paymentToken charge: ', charge);
    res.send(charge);
  })
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
});



// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:




module.exports = router;
