const { Model, DataTypes } = require('sequelize');
const { Product, Tag } = require('.');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {                        // id
      type: DataTypes.INTEGER,   // integer
      allowNull: false,          // doesn't allow null values
      primaryKey: true,          // set as primary key
      autoIncrement: true,       // uses auto increment
    },
    product_id: {                // category_id
      type: DataTypes.INTEGER,   // integer
      references: {              // references the product model's id.
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {                    // category_id
      type: DataTypes.INTEGER,   // integer
      references: {              // references the tag model's id.
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
