// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

const CryptoJS = require("crypto-js");

const API = require('./../config/api.config');

const jwt   = require('jsonwebtoken');
const Login = require('../db/models').db.User;
const Op    = require('../db/models').db.Sequelize.Op;

module.exports = {
  async validate(req, res) {    
    try {
      // Decrypt
      var bytes  = CryptoJS.AES.decrypt(req.body.password, API.PRIVATE_CRYPTO);
      var password_decrypt = bytes.toString(CryptoJS.enc.Utf8);

      let condition = { username: req.body.username, password: password_decrypt };
      const User = await Login.findOne({ where: condition });
      
      if (User === null) {
        res.status(404).json({ message: "User Not Found" })
      } else {
        const user = { id: User.id, username: User.username, email: User.email };
        const options = (User.role == 'public' ? {} : { expiresIn: '1h' })
        const token = jwt.sign({ user }, API.PRIVATE_KEY, options);

        res.cookie("SESSIONID", token, { httpOnly:true, secure:true });
        res.status(201).json((User.role === 'public' ?
          {
            Username: User.username,
            Token: token,
          }
          :
          {
            Username: User.username,
            Firstname: User.firstname,
            Lastname: User.lastname,
            Email: User.email,
            Role: User.role,
            Token: token
          }));
      }
    }
    catch (error) {
      res.status(500).json({ message: error.message || "Some error occurred while retrieving." });
    }
  }
}
