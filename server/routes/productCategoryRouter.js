const Router = require("express");
const router = new Router();
const productCategoryContoller = require('../controllers/productCategoryController');

router.post("/", productCategoryContoller.create);
router.get("/", productCategoryContoller.getAll);
router.get("/:id", productCategoryContoller.getOne);
router.put("/:id", productCategoryContoller.put);
router.delete("/:id", productCategoryContoller.delete);
// router.delete('/',);

module.exports = router;


// TODO >>>>>>>>>>>>>>>> add checkRoleMiddleware