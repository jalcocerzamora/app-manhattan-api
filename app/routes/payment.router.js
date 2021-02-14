const ROUTE = require('../config/constant/Routes');
const reqResponse = require('../config/cors/responseHandler');

let router = require("express").Router();
const controller = require('../controllers').Payment;

const db = require('../db/models').db;
const Subproduct = db.Subproduct;

// Expose the Stripe publishable key and other pieces of config via an endpoint.
const config = require('../config/stripe.config');

module.exports = (app, middleware) => {
  router.post("/create-intent", middleware, controller.createIntent);

  router.get('/config', (req, res) => {
    res.json(reqResponse.successResponse(200, "Retrive Config ", {
      stripePublishableKey: config.stripe.publishableKey,
      stripeCountry: config.stripe.country,
      country: config.country,
      currency: config.currency,
      paymentMethods: config.paymentMethods,
      shippingOptions: config.shippingOptions,
    }));
  });

  app.use(ROUTE.PAYMENT, router);
};