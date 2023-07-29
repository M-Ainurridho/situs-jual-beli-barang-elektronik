const router = require("express").Router();
const { brand } = require("../controllers");

router.get("/", brand.getAllBrands);
router.post("/add", brand.addNewBrand);

module.exports = router;
