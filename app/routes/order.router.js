let router = require("express").Router();
const order = require('../controllers/order.controller');

module.exports = (app, middleware) => {
  router.post("/", order.create);

  router.get("/", order.findAll);

  // router.get("/published", order.findAllPublished);

  router.get("/:id", order.findOne);

  // router.put("/:id", order.update);

  // router.delete("/:id", order.delete);

  // router.delete("/", order.deleteAll);

  app.use('/api/order', router);
};