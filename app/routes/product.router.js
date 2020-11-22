const router = require("express").Router();
const product = require('../controllers/').Product;

module.exports = (app, middleware) => {
  router.post("/", product.create);

  router.get("/", middleware, product.findAll);

  // router.get("/published", product.findAllPublished);

  router.get("/:id", product.findOne);

  // router.put("/:id", product.update);

  // router.delete("/:id", product.delete);

  // router.delete("/", product.deleteAll);

  app.use('/api/product', router);
};