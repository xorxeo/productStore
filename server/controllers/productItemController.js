const uuid = require("uuid");
const path = require("path");
const { ProductItem } = require("../models/models");
const ApiError = require("../error/ApiError");

class ProductItemController {
  async create(req, res, next) {
    try {
      const { productName, price, description, category } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const productItem = await ProductItem.create({
        productName,
        category,
        price,
        description,
        img: fileName,
      });

      return res.json(productItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const productItems = await ProductItem.findAll();
      return res.json(productItems);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const productItem = await ProductItem.findOne({ where: { id } });
    return res.json(productItem);
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const productItem = await await ProductItem.findOne({ where: { id } });
      if (id) {
        productItem.destroy();
      }
      return res.json({ message: "row deleted successfully" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async put(req, res, next) {
    try {
      const { id } = req.params;
      const { productName, price, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const productItem = await (
        await ProductItem.findOne({ where: { id } })
      ).update({ productName, price, description, img: fileName });

      return res.json(productItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async patch(req, res, next) {
    try {
      const { id } = req.params;
      const { productName, price, description, productCategoryId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const productItem = await (
        await ProductItem.findOne({ where: { id } })
      ).update({
        productName,
        price,
        description,
        img: fileName,
        productCategoryId,
      });

      return res.json(productItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductItemController();
