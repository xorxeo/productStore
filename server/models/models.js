const sequelize = require("../db");
const uuid = require("uuid");
const { DataTypes, UUID, UUIDV1 } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
  },
  { freezeTableName: true }
);

const UserRefProduct = sequelize.define(
  "user_product",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // user_id: { type: DataTypes.INTEGER, primaryKey: true },
    // product_item_id: { type: DataTypes.INTEGER, primaryKey: true },
  },
  { freezeTableName: true }
);

const ProductCategory = sequelize.define(
  "product_category",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING, unique: true, allowNull: false,},
    img: { type: DataTypes.STRING, defaultValue: 1, allowNull: false },
  },
  { freezeTableName: true }
);

const ProductItem = sequelize.define(
  "product_item",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: { type: DataTypes.STRING, unique: true, allowNull: false },
    // category: { type: DataTypes.STRING, allowNull: false, defaultValue: 1, 
    //             ProductCategoryId: {
    //               type: DataTypes.INTEGER,
    //               references: {
    //                 model: ProductCategory,
    //                 key: 'id',
    //               }
    // }},
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
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
  },
  { freezeTableName: true },
);

User.belongsTo(Rating);
// Rating.belongsTo(User);

User.hasMany(UserRefProduct);

ProductCategory.hasMany(ProductItem);


ProductItem.hasMany(Rating);
Rating.belongsTo(ProductItem);

ProductItem.hasMany(UserRefProduct);
UserRefProduct.belongsTo(ProductItem);

module.exports = {
  User,
  UserRefProduct,
  ProductCategory,
  ProductItem,
  Rating,
};
