const ROUTE = require('../config/constant/Routes');
let router = require("express").Router();
const login = require('../controllers').Login;

module.exports = (app, middleware) => {
  // app.post("/api/authenticate", Login.validate);

  router.post("/", login.validate);

  app.use(ROUTE.LOGIN, router);
};
