module.exports = (app, middleware) => {
    const product = require('../controllers/').Product;
  
    var router = require("express").Router();

    router.post("/", product.create);

    router.get("/", middleware, product.findAll);

    // router.get("/published", product.findAllPublished);

    router.get("/:id", product.findOne);

    // router.put("/:id", product.update);

    // router.delete("/:id", product.delete);

    // router.delete("/", product.deleteAll);
  
    app.use('/api/product', router);
  };