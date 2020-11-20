var router = require("express").Router();

const db = require('../db/models').db;
const Subproduct = db.Subproduct;

module.exports = (app, middleware) => {

  const controller = require('../controllers/payment.controller');

  router.post("/create-intent", middleware, controller.createIntent);
  
  // Expose the Stripe publishable key and other pieces of config via an endpoint.
  const config = require('../config/stripe.config');
  router.get('/config', (req, res) => {
    res.json({
      stripePublishableKey: config.stripe.publishableKey,
      stripeCountry: config.stripe.country,
      country: config.country,
      currency: config.currency,
      paymentMethods: config.paymentMethods,
      shippingOptions: config.shippingOptions,
    });
  });

  app.use('/api/payment', router);
};