var router = require("express").Router();

const category = require('../controllers').Category;

module.exports = (app, middleware) => {
    router.post("/", category.create);
    app.use('/api/category', router);
  };