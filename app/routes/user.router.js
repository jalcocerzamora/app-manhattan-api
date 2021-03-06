const ROUTE = require('../config/constant/Routes');

let router = require("express").Router();
const controller = require('../controllers/user.controller');

module.exports = (app, middleware) => {
  router.post("/", controller.create);

  router.get("/", middleware, controller.findAll);

  // router.get("/published", product.findAllPublished);

  router.get("/:id", controller.findOne);

  // router.put("/:id", product.update);

  // router.delete("/:id", product.delete);

  // router.delete("/", product.deleteAll);

  app.use(ROUTE.USER, router);
};