const connection = require("../config/database");
const { response } = require("../response");
const { body, validationResult } = require("express-validator");
const { brandName } = require("../models/model-product");

const getAllBrands = (req, res) => {
   connection.query(`SELECT * FROM brands`, (err, rows) => {
      if (err) {
         response(500, "Internal Server Error!", res);
      }

      response(200, "Get All Brands", res, rows);
   });
};

const addNewBrand = [
   body("name")
      .trim()
      .notEmpty()
      .withMessage("Input field cannot be empty")
      .custom(async (value) => {
         const duplicate = await brandName(value.toLowerCase());
         if (duplicate.length > 0) {
            throw new Error("The brand name already exists");
         }
      }),
   (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return response(402, "ERROR!", res, errors.array());
      }

      const { name } = req.body;

      connection.query(`INSERT INTO brands VALUES(0, '${name.toLowerCase()}')`, (err, rows) => {
         if (err) {
            return response(500, "Internal Server Error!", res);
         }

         if (rows?.affectedRows) {
            response(200, "Successfully Added New Brand!", res, `insertId : ${rows.insertId}`);
         } else {
            response(404, "Failed Add New Brand!", res, "Not Found");
         }
      });
   },
];

module.exports = {
   getAllBrands,
   addNewBrand,
};
