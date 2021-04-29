// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product);   // Categories have many Products
Product.belongsTo(Category); // Products belongs to Category

// NOTE: through value should be model name declared in init
Product.belongsToMany(Tag, { through: 'product_tag' }); // products belongToMany tags (through ProductTag)
Tag.belongsToMany(Product, { through: 'product_tag' }); // tags belongToMany products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
