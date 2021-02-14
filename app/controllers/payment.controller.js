const reqResponse = require('../config/cors/responseHandler');

const Subproduct = require('../db/models').db.Subproduct;
const Op = require('../db/models').db.Sequelize.Op;

// User.sync({ alter: true });

// This is your real test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// stripe.setApiVersion(config.stripe.apiVersion);

async function calculateOrderAmount(items) {
  // Look up sku for the item so we can get the current price.
  let totalAmount = 0;

  for (const item of items) {
    const subproduct = await Subproduct.findByPk(item.parent);
    if (subproduct !== null) {
      totalAmount = totalAmount + (Number(subproduct.price) * item.quantity);
    }
  }

  return totalAmount * 100;
};

/**
 * Stripe integration to accept all types of payments with 3 POST endpoints.
 *
 * 1. POST endpoint to create a PaymentIntent.
 * 2. For payments using Elements, Payment Request, Apple Pay, Google Pay, Microsoft Pay
 * the PaymentIntent is confirmed automatically with Stripe.js on the client-side.
 * 3. POST endpoint to be set as a webhook endpoint on your Stripe account.
 * It confirms the PaymentIntent as soon as a non-card payment source becomes chargeable.
 */

module.exports = {

  async getIntent(req, res) {
    try {
      const { id } = req.body;

      // Retrieve the PaymentIntent status.
      const paymentIntent = await stripe.paymentIntents.retrieve(id);
      const payload = {};
      const { status } = paymentIntent;

      if (status.last_payment_error) {
        payload.last_payment_error = paymentIntent.last_payment_error.message;
      }
    }
    catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
    
    // router.get('/payment_intents/:id/status', async (req, res) => {
    //   const paymentIntent = await stripe.paymentIntents.retrieve(req.params.id);
    //   const payload = {status: paymentIntent.status};

    //   if (paymentIntent.last_payment_error) {
    //     payload.last_payment_error = paymentIntent.last_payment_error.message;
    //   }

    //   res.json({paymentIntent: payload});
    // });
  },

  async createIntent(req, res) {
    try {
      const { currency, items } = req.body;

      //build initial payment methods which should exclude currency specific ones
      // const initPaymentMethods = config.paymentMethods.filter(paymentMethod => paymentMethod !== 'au_becs_debit');

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: await calculateOrderAmount(items),
        currency: currency,
        capture_method: "manual"
      });

      // Send publishable key and PaymentIntent details to client
      res.status(200).send(reqResponse.successResponse(200, "Intent Created", {
        publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id
      }));
    }
    catch (err) {
      console.log(err);
      res.status(400).send(reqResponse.errorResponse(400, err));
    }
  },

  async captureIntent(req, res) {
    try {
      const { id, items } = req.body;

      //build initial payment methods which should exclude currency specific ones
      // const initPaymentMethods = config.paymentMethods.filter(paymentMethod => paymentMethod !== 'au_becs_debit');

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.capture({
        amount_to_capture: await calculateOrderAmount(items)
      });

      // Send publishable key and PaymentIntent details to client
      res.status(201).send({
        publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id
      });
    }
    catch (err) {
      console.log(err);
      res.status(400).send(reqResponse.errorResponse(400, err));
    }
  },

  async updateItentCost(req, res) {
    // Update PaymentIntent with shipping cost.
    // router.post('/payment_intents/:id/shipping_change', async (req, res, next) => {
    //   const {items, shippingOption} = req.body;
    //   let amount = await calculatePaymentAmount(items);
    //   amount += products.getShippingCost(shippingOption.id);

    //   try {
    //     const paymentIntent = await stripe.paymentIntents.update(req.params.id, {
    //       amount,
    //     });
    //     return res.status(200).json({paymentIntent});
    //   } catch (err) {
    //     return res.status(500).json({error: err.message});
    //   }
    // });
  },

  async updateItentCostAndMethod(req, res) {
    // Update PaymentIntent with currency and paymentMethod.
    // router.post('/payment_intents/:id/update_currency', async (req, res, next) => {
    //   const {currency, payment_methods} = req.body; 
    //   try {
    //     const paymentIntent = await stripe.paymentIntents.update(req.params.id, {
    //       currency,
    //       payment_method_types: payment_methods,
    //     });
    //     return res.status(200).json({paymentIntent});
    //   } catch (err) {
    //     return res.status(500).json({error: err.message});
    //   }
    // }); 
  },

  async updateItentCostAndMethod(req, res) {
    /*
    // Webhook handler to process payments for sources asynchronously.
    let data;
    let eventType;
    // Check if webhook signing is configured.
    if (config.stripe.webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          req.rawBody,
          signature,
          config.stripe.webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data;
      eventType = req.body.type;
    }
    const object = data.object;

    // Monitor payment_intent.succeeded & payment_intent.payment_failed events.
    if (object.object === 'payment_intent') {
      const paymentIntent = object;
      if (eventType === 'payment_intent.succeeded') {
        console.log(
          `🔔  Webhook received! Payment for PaymentIntent ${paymentIntent.id} succeeded.`
        );
      } else if (eventType === 'payment_intent.payment_failed') {
        const paymentSourceOrMethod = paymentIntent.last_payment_error
          .payment_method
          ? paymentIntent.last_payment_error.payment_method
          : paymentIntent.last_payment_error.source;
        console.log(
          `🔔  Webhook received! Payment on ${paymentSourceOrMethod.object} ${paymentSourceOrMethod.id} of type ${paymentSourceOrMethod.type} for PaymentIntent ${paymentIntent.id} failed.`
        );
        // Note: you can use the existing PaymentIntent to prompt your customer to try again by attaching a newly created source:
        // https://stripe.com/docs/payments/payment-intents/usage#lifecycle
      }
    }
    */
  },

  /*
  // Monitor `source.chargeable` events.
  if (
    object.object === 'source' &&
    object.status === 'chargeable' &&
    object.metadata.paymentIntent
  ) {
    const source = object;
    console.log(`🔔  Webhook received! The source ${source.id} is chargeable.`);
    // Find the corresponding PaymentIntent this source is for by looking in its metadata.
    const paymentIntent = await stripe.paymentIntents.retrieve(
      source.metadata.paymentIntent
    );
    // Check whether this PaymentIntent requires a source.
    if (paymentIntent.status != 'requires_payment_method') {
      return res.sendStatus(403);
    }
    // Confirm the PaymentIntent with the chargeable source.
    await stripe.paymentIntents.confirm(paymentIntent.id, {source: source.id});
  }

  // Monitor `source.failed` and `source.canceled` events.
  if (
    object.object === 'source' &&
    ['failed', 'canceled'].includes(object.status) &&
    object.metadata.paymentIntent
  ) {
    const source = object;
    console.log(`🔔  The source ${source.id} failed or timed out.`);
    // Cancel the PaymentIntent.
    await stripe.paymentIntents.cancel(source.metadata.paymentIntent);
  }

  // Return a 200 success code to Stripe.
  res.sendStatus(200);
});
*/

/**
 * Routes exposing the config as well as the ability to retrieve products.
 */

  // Expose the Stripe publishable key and other pieces of config via an endpoint.
  // router.get('/config', (req, res) => {
  //   res.json({
  //     stripePublishableKey: config.stripe.publishableKey,
  //     stripeCountry: config.stripe.country,
  //     country: config.country,
  //     currency: config.currency,
  //     paymentMethods: config.paymentMethods,
  //     shippingOptions: config.shippingOptions,
  //   });
  // });

}