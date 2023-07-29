const router = require("express").Router();
const { category } = require("../controllers");

router.get("/", category.getAllCategories);
router.post("/add", category.addNewCategory);

module.exports = router;
