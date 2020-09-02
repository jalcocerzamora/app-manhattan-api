module.exports = (app, middleware) => {
    const order = require('../controllers/order.controller');
  
    var router = require("express").Router();
  
    router.post("/", order.create);
  
    router.get("/", order.findAll);
  
    // router.get("/published", order.findAllPublished);
  
    router.get("/:id", order.findOne);
  
    // router.put("/:id", order.update);
  
    // router.delete("/:id", order.delete);
  
    // router.delete("/", order.deleteAll);
  
    app.use('/app-manhattan/api/order', router);
  };