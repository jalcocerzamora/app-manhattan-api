let router = require("express").Router();
const category = require('../controllers').Category;

module.exports = (app, middleware) => {  
    // router = middleware
    // Create a new Category
    router.post("/", category.create);
  
    // Retrieve all Categories
    router.get("/", middleware, category.findAll);
  
    // Retrieve all published Customers
    // router.get("/published", category.findAllPublished);
  
    // Retrieve a single Category with id
    router.get("/:id", category.findOne);
  
    // Update a Category with id
    // router.put("/:id", category.update);
  
    // Delete a Category with id
    // router.delete("/:id", category.delete);
  
    // Delete all Customers
    // router.delete("/", category.deleteAll);
  
    // router.use(middleware)
    app.use('/api/category', router);
  };