const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Product model
class Product extends Model {}

// create fields/columns for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    priduct_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      Validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      References: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product'
  }
);

module.exports = Product;
