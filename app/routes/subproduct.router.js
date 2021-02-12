let router = require("express").Router();
const controller = require('../controllers/').Subproduct;

module.exports = (app, middleware) => {
  router.get("/", middleware, controller.finAllWithProductAndCategory);

  // router.get("/", middleware, controller.findAll);

  // router.get("/all", middleware, controller.finAllWithProductAndCategory);

  // router.get("/published", controller.findAllPublished);

  router.get("/:id", controller.findOne);

  router.post("/", controller.create);

  // router.put("/:id", controller.update);

  // router.delete("/:id", controller.delete);

  // router.delete("/", controller.deleteAll);

  app.use('/v1/menu', router);
};