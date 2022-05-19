const Router = require("express");
const router = new Router();
const userRouter = require('./userRouter');
const productCategoryRouter = require('./productCategoryRouter');
const productItemRouter = require('./productItemRouter');
const basketRouter = require('./basketRouter');

router.use("/user", userRouter);
router.use("/product-category", productCategoryRouter);
router.use("/product-item", productItemRouter);
router.use("/basket", basketRouter)

module.exports = router;
