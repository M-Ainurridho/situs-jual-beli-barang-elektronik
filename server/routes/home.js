const router = require("express").Router();

router.get("/", (req, res) => {
   res.send("Router Home").end();
});

module.exports = router;
