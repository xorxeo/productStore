const uuid = require("uuid");
const path = require("path");
const { ProductItem } = require("../models/models");
const ApiError = require("../error/ApiError");

class ProductItemController {
  async create(req, res, next) {
    try {
      const { product_name, price, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const productItem = await ProductItem.create({
        product_name,
        price,
        description,
        img: fileName,
      });

      return res.json(productItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const productItems = await ProductItem.findAll();
    return res.json(productItems);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const productItem = await ProductItem.findOne({ where: { id } });
    return res.json(productItem);
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const productItem = await (await ProductItem.findOne({ where: { id } }));
      if(id) {
        productItem.destroy();
      }
      return res.json({message: "row deleted successfully"})
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async put(req, res, next) {
    try {
      const { id } = req.params;
      const { product_name, price, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const productItem = await (
        await ProductItem.findOne({ where: { id } })
      ).update({ product_name, price, description, img: fileName });

      return res.json(productItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }


  async patch(req, res, next) {
    try {
      const { id } = req.params;
      const { product_name, price, description, productCategoryId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const productItem = await (
        await ProductItem.findOne({ where: { id } })
      ).update({ product_name, price, description, img: fileName, productCategoryId });

      return res.json(productItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductItemController();
