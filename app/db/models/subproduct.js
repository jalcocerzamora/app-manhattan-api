'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subproduct.belongsTo(models.Product, {onDelete: "CASCADE", foreignKey: 'product_id' });
      Subproduct.hasMany(models.Order, { foreignKey: 'product_id', as: 'order' })
    }
  };
  Subproduct.init({
    product_id:    { type: DataTypes.INTEGER, allowNull: false, unique: 'subproduct' },
    image:  { type: DataTypes.STRING },
    name:   { type: DataTypes.STRING(255), allowNull: false, unique: 'subproduct' },
    price:  { type: DataTypes.DECIMAL(10, 2), allowNull: false, unique: 'subproduct' },
    description:  { type: DataTypes.STRING(255), },
    default:  { type: DataTypes.BOOLEAN, },
    status: { type: DataTypes.BOOLEAN, },
    online: { type: DataTypes.BOOLEAN, },
  }, {
    sequelize,
    modelName: 'Subproduct',
  });
  return Subproduct;
};