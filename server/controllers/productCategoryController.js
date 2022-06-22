const uuid = require("uuid");
const path = require("path");
const { ProductCategory } = require("../models/models");
const ApiError = require("../error/ApiError");

class ProductCategoryController {
  async create(req, res, next) {
    try {
      const { category } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      
      console.log(req);

      const productCategory = await ProductCategory.create({
        category,
        img: fileName,
      });
      return res.json(productCategory);
    } catch (e) {
      console.log(req);
      next(ApiError.badRequest(e.message));
      
    }
  }

  async getAll(req, res, next) {
    try {
      const productCategories = await ProductCategory.findAll();
      return res.json(productCategories);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const productCategory = await ProductCategory.findOne({ where: { id } });
    return res.json(productCategory);
  }

  async put(req, res, next) {
    try {
      const { id } = req.params;
      const { category, price, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const productCategory = await (
        await ProductCategory.findOne({ where: { id } })
      ).update({ category, price, description, img: fileName });

      return res.json(productCategory);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const productCategory = await await ProductCategory.findOne({
        where: { id },
      });
      if (id) {
        productCategory.destroy();
      }
      return res.json({ message: "row deleted successfully" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductCategoryController();
