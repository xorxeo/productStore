const { Basket } = require("..models/Basket");
const ApiError = require("../error/ApiError");

const MAX_AGE = 60 * 60 * 1000 * 24 * 365; // 1 year
const signed = true;

class BasketController {
  async getOne(req, res, next) {
    try {
      let basket;
      if (req.signedCookies.basketId) {
        basket = await Basket.getOne(parseInt(req.signedCookies.basketId));
      } else {
        basket = await Basket.create();
      }
      res.cookie("basketId", basket.id, { MAX_AGE, signed });
      res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async append(req, res, next) {
    try {
      let basketId;
      if (!req.signedCookies.basketId) {
        let created = await Basket.create();
        basketId = created.id;
      } else {
        basketId = parseInt(req.signedCookies.basketId);
      }
      const { productItemId, quantity } = req.params;
      const basket = await Basket.append(basketId, productItemId, quantity);
      res.cookie("basketId", basket.id, { MAX_AGE, signed });
      res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async increment(req, res, next) {
    try {
      let basketId;
      if (!req.signedCookies.basketId) {
        let created = await Basket.create();
        basketId = created.id;
      } else {
        basketId = parseInt(req.signedCookies.basketId);
      }
      const { productItemId, quantity } = req.params;
      const basket = await Basket.increment(basketId, productItemId, quantity);
      res.cookie("basketId", basket.id, { MAX_AGE, signed });
      res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async decrement(req, res, next) {
    try {
      let basketId;
      if (!req.signedCookies.basketId) {
        let created = await Basket.create();
        basketId = created.id;
      } else {
        basketId = parseInt(req.signedCookies.basketId);
      }
      const { productItemId, quantity } = req.params;
      const basket = Basket.decrement(basketId, productItemId, quantity);
      res.cookie("basketId", basket.id, { MAX_AGE, signed });
      res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async remove(req, res, next) {
    try {
      let basketId;
      if (!req.signedCookies.basketId) {
        let created = await Basket.create();
        basketId = created.id;
      } else {
        basketId = parseInt(req.signedCookies.basketId);
      }
      const basket = await Basket.remove(basketId, req.params.productItemId);
      res.cookie("basketId", basket.id, { MAX_AGE, signed });
      res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async clear(req, res, next) {
    try {
      let basketId;
      if (!req.signedCookies.basketId) {
        let created = await Basket.create();
        basketId = created.id;
      } else {
        basketId = parseInt(req.signedCookies.basketId);
      }
      const basket = await Basket.clear(basketId);
      res.cookie("basketId", basket.id, { MAX_AGE, signed });
      res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
