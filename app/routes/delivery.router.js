module.exports = (app, middleware) => {
    const delivery = require('../controllers/delivery.controller');
  
    var router = require("express").Router();
  
    router.post("/", delivery.create);
  
    router.get("/", delivery.findAll);
  
    // router.get("/published", delivery.findAllPublished);
  
    router.get("/:id", delivery.findOne);
  
    // router.put("/:id", delivery.update);
  
    // router.delete("/:id", delivery.delete);
  
    // router.delete("/", delivery.deleteAll);
  
    app.use('/api/delivery', router);
  };