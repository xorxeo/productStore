const Router = require("express");
const router = new Router();
const productCategoryContoller = require("../controllers/productCategoryController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", productCategoryContoller.create);
router.get("/", productCategoryContoller.getAll);
router.get("/:id", productCategoryContoller.getOne);
// router.put("/:id", productCategoryContoller.put);
router.delete("/:id", checkRole("ADMIN"), productCategoryContoller.delete);

module.exports = router;

// TODO >>>>>>>>>>>>>>>> add checkRoleMiddleware
