module.exports = (app, middleware) => {
    const controller = require('../controllers/').Subproduct;
  
    var router = require("express").Router();
  
    router.post("/", controller.create);
  
    router.get("/", middleware, controller.findAll);

    router.get("/all", middleware, controller.finAllWithProductAndCategory);
  
    // router.get("/published", controller.findAllPublished);
  
    router.get("/:id", controller.findOne);
  
    // router.put("/:id", controller.update);
  
    // router.delete("/:id", controller.delete);
  
    // router.delete("/", controller.deleteAll);
  
    app.use('/api/subproduct', router);
  };