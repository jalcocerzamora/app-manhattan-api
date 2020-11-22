const Login         = require('./login.controller');
const User          = require('./user.controller');
// const Module        = require('./module.controller');
const Category      = require('./category.controller');
const Product       = require('./product.controller');
const Subproduct    = require('./subproduct.controller');
const Payment       = require('./payment.controller');
const Delivery      = require('./delivery.controller');
const Customer      = require('./customer.controller');

module.exports =  {
    Login,
    User,
    // Module,
    Category,
    Product,
    Subproduct,
    Payment,
    Delivery,
    Customer,
}