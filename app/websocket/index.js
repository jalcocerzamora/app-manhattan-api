module.exports = (app, middleware) => {
    require("./socket.router")(app, middleware);
}