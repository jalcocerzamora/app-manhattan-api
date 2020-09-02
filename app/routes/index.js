module.exports = (app, middleware) => {
    const Login = require('../controllers/login.controller');

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome to API APP-MANHATTAN"
        })
    })

    app.post("/api/authenticate", Login.validate)

    require("./user.router")(app, middleware);
    require("./module.router")(app, middleware);
    require("./category.router")(app, middleware);
    require("./product.router")(app, middleware);
    require("./subproduct.router")(app, middleware);
}