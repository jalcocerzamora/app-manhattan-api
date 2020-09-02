'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { isNullOrUndefined, isBoolean } = require('util');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

if(!isNullOrUndefined(process.env.ALTER_DB) && process.env.ALTER_DB == 'true') {
  db.sequelize.sync({ alter: true });
  console.log("sync.alter!");
} else if(!isNullOrUndefined(process.env.FORCE_DB) && process.env.FORCE_DB == 'true') {
  db.sequelize.sync({ force: true });
  console.log("sync.force!");
}

isNullOrUndefined

module.exports = {
  db
};
