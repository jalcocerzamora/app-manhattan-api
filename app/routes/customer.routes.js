module.exports = (app, middleware) => {
  const customer = require('../controllers/customer.controller');

  var router = require("express").Router();

  // Create a new Customer
  router.post("/", customer.create);

  // Retrieve all Customers
  router.get("/", customer.findAll);

  // Retrieve all published Customers
  // router.get("/published", customer.findAllPublished);

  // Retrieve a single Customer with id
  router.get("/:id", customer.findOne);

  // Update a Customer with id
  // router.put("/:id", customer.update);

  // Delete a Customer with id
  // router.delete("/:id", customer.delete);

  // Delete all Customers
  // router.delete("/", customer.deleteAll);

  app.use('/api/customer', router);
};