const Router = require("express");
const router = new Router();

router.get('/getone', BasketController.getOne);
router.put('/product/:id([0-9]+)/append/:quantity([0-9])+', BasketController.append);
router.put('/product/:id([0-9]+)/increment/:quantity([0-9])+', BasketController.increment);
router.put('/product/:id([0-9]+)/decrement/:quantity([0-9])+', BasketController.decrement);
router.put('/product/:id([0-9]+)/remove', BasketController.remove);
router.put('/clear', BasketController.clear);

module.exports = router;