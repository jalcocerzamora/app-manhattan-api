let router      = require("express").Router();
const controller  = require('../controllers').Customer;

module.exports = (app, middleware) => {
  // Create a new Customer
  router.post("/", controller.create);

  // Retrieve all Customers
  router.get("/", controller.findAll);

  // Retrieve all published Customers
  // router.get("/published", controller.findAllPublished);

  // Retrieve a single Customer with id
  router.get("/:id", controller.findOne);

  // Update a Customer with id
  // router.put("/:id", controller.update);

  // Delete a Customer with id
  // router.delete("/:id", controller.delete);

  // Delete all Customers
  // router.delete("/", controller.deleteAll);

  app.use('/api/customer', router);
};