'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Permission, { foreignKey: 'userId', as: 'permission' })
    }
  };
  User.init({
    avatar: DataTypes.STRING,
    firstname: { type: DataTypes.STRING, allowNull: false, },
    lastname: { type: DataTypes.STRING, allowNull: false, },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false, },
    email: { type: DataTypes.STRING, allowNull: false, },
    role: {
      type: DataTypes.ENUM,
      values: ['developer', 'administrator', 'customer', 'public', 'none'] },
    }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};