const router = require("express").Router();
const { product } = require("../controllers");

router.get("/", product.getAllProducts);
router.get("/:category", product.getProductByCategory);
router.post("/add", product.addNewProduct);

module.exports = router;
