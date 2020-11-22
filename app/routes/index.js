module.exports = (app, middleware) => {
    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome to API APP-MANHATTAN"
        })
    })

    require("./login.router")(app, middleware);
    require("./payment.router")(app, middleware);
    require("./user.router")(app, middleware);
    require("./module.router")(app, middleware);
    require("./category.router")(app, middleware);
    require("./product.router")(app, middleware);
    require("./subproduct.router")(app, middleware);

    // Webhook handler for asynchronous events.
    // app.post("/webhook", async (req, res) => {
    //     // Check if webhook signing is configured.
    //     if (env.parsed.STRIPE_WEBHOOK_SECRET) {
    //         // Retrieve the event by verifying the signature using the raw body and secret.
    //         let event;
    //         let signature = req.headers["stripe-signature"];
    //         try {
    //             event = stripe.webhooks.constructEvent(
    //                 req.rawBody,
    //                 signature,
    //                 env.parsed.STRIPE_WEBHOOK_SECRET
    //             );
    //         } catch (err) {
    //             console.log(`⚠️  Webhook signature verification failed.`);
    //             return res.sendStatus(400);
    //         }
    //         data = event.data;
    //         eventType = event.type;
    //     } else {
    //         // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    //         // we can retrieve the event data directly from the request body.
    //         data = req.body.data;
    //         eventType = req.body.type;
    //     }

    //     if (eventType === "payment_intent.amount_capturable_updated") {
    //         console.log(`❗ Charging the card for: ${data.object.amount_capturable}`);
    //         // You can capture an amount less than or equal to the amount_capturable
    //         // By default capture() will capture the full amount_capturable
    //         // To cancel a payment before capturing use .cancel() (https://stripe.com/docs/api/payment_intents/cancel)
    //         const intent = await stripe.paymentIntents.capture(data.object.id);
    //     } else if (eventType === "payment_intent.succeeded") {
    //         // Funds have been captured
    //         // Fulfill any orders, e-mail receipts, etc
    //         // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
    //         console.log("💰 Payment captured!");
    //     } else if (eventType === "payment_intent.payment_failed") {
    //         console.log("❌ Payment failed.");
    //     }
    //     res.sendStatus(200);
    // });
}
