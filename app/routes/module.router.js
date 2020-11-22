const router = require("express").Router();
const controller = require('../controllers').Module;

module.exports = (app, middleware) => {
  router.post("/", controller.create);

  router.get("/", middleware, controller.findAll);

  // router.get("/published", product.findAllPublished);

  router.get("/:id", controller.findOne);

  // router.put("/:id", product.update);

  // router.delete("/:id", product.delete);

  // router.delete("/", product.deleteAll);

  app.use('/api/product', router);
};