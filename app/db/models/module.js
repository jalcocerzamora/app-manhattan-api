'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Module.hasMany(models.Permission, { foreignKey: 'module_id', as: 'permission' })
    }
  };
  Module.init({
    name: DataTypes.STRING,
    navbar: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};