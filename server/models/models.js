const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
  },
  { freezeTableName: true }
);

const Basket = sequelize.define(
  "basket",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { freezeTableName: true }
);

const BasketProduct = sequelize.define(
  "basketProduct", 
  {
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  { freezeTableName: true }
);

const ProductCategory = sequelize.define(
  "productCategory",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING, unique: true, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
  },
  { freezeTableName: true }
);

const ProductItem = sequelize.define(
  "productItem",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
  },
  { freezeTableName: true }
);

const Rating = sequelize.define(
  "rating",
  {
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
  },
  { freezeTableName: true }
);

Basket.belongsToMany(ProductItem, {
  through: BasketProduct,
  onDelete: "CASCADE",
});
ProductItem.belongsToMany(Basket, {
  through: BasketProduct,
  onDelete: "CASCADE",
});

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);
ProductItem.hasMany(BasketProduct);
BasketProduct.belongsTo(ProductItem);

ProductCategory.hasMany(ProductItem);
ProductItem.belongsTo(ProductCategory);

ProductItem.hasMany(Rating);
Rating.belongsTo(ProductItem);
User.hasMany(Rating);
Rating.belongsTo(User);

ProductItem.belongsToMany(User, { through: Rating, onDelete: "CASCADE" });
User.belongsToMany(ProductItem, { through: Rating, onDelete: "CASCADE" });

module.exports = {
  User,
  Basket,
  BasketProduct,
  ProductCategory,
  ProductItem,
  Rating,
};
