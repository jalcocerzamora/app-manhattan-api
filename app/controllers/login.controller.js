const reqResponse = require('../config/cors/responseHandler');
// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

const CryptoJS = require("crypto-js");

// const API = require('./../config/api.config');
const config      = require('config');
const jwt   = require('jsonwebtoken');
const Login = require('../db/models').db.User;
const Op    = require('../db/models').db.Sequelize.Op;

module.exports = {
  async validate(req, res) {    
    try {
      // Decrypt
      var bytes  = CryptoJS.AES.decrypt(req.body.password, config.api.PRIVATE_CRYPTO);
      var password_decrypt = bytes.toString(CryptoJS.enc.Utf8);

      let condition = { username: req.body.username, password: password_decrypt };
      const User = await Login.findOne({ where: condition });
      
      if (User === null) {
        res.status(400).json(reqResponse.errorResponse(400, "User Not Found"))
      } else {
        const user = { id: User.id, username: User.username, email: User.email };
        const options = (User.role == 'public' ? {} : { expiresIn: '1h' })
        const token = jwt.sign({ user }, API.PRIVATE_KEY, options);

        const data = (User.role === 'public' ? { Username: User.username, Token: token } : { Username: User.username, Firstname: User.firstname, Lastname: User.lastname, Email: User.email, Role: User.role, Token: token });

        res.cookie("SESSIONID", token, { httpOnly:true, secure:true });
        res.status(201).json(reqResponse.successResponse(201, "User Found", data));
      }
    }
    catch (error) {
      res.status(500).json(reqResponse.errorResponse(500, error.message || "Some error occurred while retrieving."));
    }
  }
}
