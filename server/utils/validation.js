const { checkEmail } = require("../models/model-user");
const { response } = require("../response");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const registerVerify = [
   body("fullname").trim().notEmpty().withMessage("Input field cant't be empty"),
   body("email")
      .trim()
      .notEmpty()
      .withMessage("Input field cant't be empty")
      .isEmail()
      .withMessage("Invalid input email")
      .custom(async (value) => {
         const duplicate = await checkEmail(value);
         if (duplicate.length > 0) {
            throw new Error("That e-mail already exists");
         }
      }),
   body("password").trim().notEmpty().withMessage("Input field cant't be empty").isLength({ min: 3 }).withMessage("Password too short"),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return response(402, "ERROR", res, errors.array());
      }
      next();
   },
];

const loginVerify = [
   body("email").trim().notEmpty().withMessage("Input field cant't be empty").isEmail().withMessage("Invalid input email"),
   body("password").trim().notEmpty().withMessage("Input field cant't be empty"),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return response(402, "ERROR", res, errors.array());
      }

      next();
   },
];

const userAccess = (req, res, next) => {
   const token = req.headers["log-auth"];

   if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
   }

   jwt.verify(token, "@Ridhomantap11", function (err, decoded) {
      if (err) console.log(err);

      req.user = decoded;
      next();
   });
};

module.exports = { registerVerify, loginVerify, userAccess };
