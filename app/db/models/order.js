'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Subproduct, {
        onDelete: "CASCADE",
        foreignKey: 'product_id'
      });
    }
  };
  Order.init({
    subproduct_id: { type: DataTypes.INTEGER, allowNull: false, },
    quantity: { type: DataTypes.INTEGER, allowNull: false, },
    comments: { type: DataTypes.STRING, },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};