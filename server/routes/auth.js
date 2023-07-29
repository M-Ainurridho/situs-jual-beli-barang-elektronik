const { auth } = require("../controllers");
const { registerVerify, loginVerify, userAccess } = require("../utils/validation");
const router = require("express").Router();

router.post("/login", loginVerify, auth.login);
router.get("/useraccess", userAccess, auth.infoUser);
router.post("/register", registerVerify, auth.register);

module.exports = router;
