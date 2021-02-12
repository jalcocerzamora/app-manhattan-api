'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.belongsTo(models.User, { onDelete: "CASCADE", foreignKey: 'user_id' });
      Permission.belongsTo(models.Module, { onDelete: "CASCADE", foreignKey: 'module_id' });
    }
  };
  Permission.init({
    user_id: DataTypes.INTEGER,
    module_id: DataTypes.INTEGER,
    create: DataTypes.BOOLEAN,
    read: DataTypes.BOOLEAN,
    update: DataTypes.BOOLEAN,
    delete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};