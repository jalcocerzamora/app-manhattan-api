'use strict';
const { Model, DataTypes, Deferrable } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { onDelete: "CASCADE", foreignKey: 'category_id' });
      Product.hasMany(models.Subproduct, { foreignKey: 'product_id', as: 'subproduct' })
    }
  };
  Product.init({
    image: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING(255), allowNull: false, unique: 'product' },
    description: { type: DataTypes.STRING(255), },
    category_id: { type: DataTypes.INTEGER, unique: 'product' },
    status: { type: DataTypes.BOOLEAN, defaultValue: 1 },
    online: { type: DataTypes.BOOLEAN, defaultValue: 1 },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};