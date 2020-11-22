const router = require("express").Router();
const Login = require('../controllers').Login;

module.exports = (app, middleware) => {
  // router.post("/", order.create);

  app.post("/api/authenticate", Login.validate);

  // app.use('/api/category', router);
};
