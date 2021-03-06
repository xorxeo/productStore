const Router = require("express");
const router = new Router();
const productItemController = require("../controllers/productItemController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/createProductItem", productItemController.create);
router.get("/categories/:category", productItemController.getAll);
router.get("/productItems/:id", productItemController.getOne);
router.put("/:id", productItemController.put);

router.patch("/:id", productItemController.patch);

router.delete("/:id", checkRole("ADMIN"), productItemController.delete);
// router.delete('/',);

module.exports = router;


// TODO >>>>>>>>>>>>>>>> add checkRoleMiddleware
