const ConfigAPI = require('./../config/api.config');

const jwt   = require('jsonwebtoken');
const Login = require('../db/models').db.User;
const Op    = require('../db/models').db.Sequelize.Op;

module.exports = {
  async validate(req, res) {
    let condition = { username: req.body.username, password: req.body.password };
    try {
      const User = await Login.findOne({ where: condition });
      if (User === null) {
        res.status(404).json({ message: "User Not Found" })
      } else {
        const user = { id: User.id, username: User.username, email: User.email };
        const options = (User.role == 'public' ? {} : { expiresIn: '1h' })
        const token = jwt.sign({ user }, ConfigAPI.PrivateKey, options);

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
