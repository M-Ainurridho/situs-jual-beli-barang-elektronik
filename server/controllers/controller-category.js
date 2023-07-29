const connection = require("../config/database");
const { body, validationResult } = require("express-validator");
const { response } = require("../response");
const { categoryName } = require("../models/model-product");

const getAllCategories = (req, res) => {
   connection.query(`SELECT * FROM categories`, (err, rows) => {
      if (err) {
         response(500, "Internal Server Error!", res);
      }

      response(200, "Get All Categories", res, rows);
   });
};

const addNewCategory = [
   body("name")
      .trim()
      .notEmpty()
      .withMessage("Input field cannot be empty")
      .custom(async (value) => {
         const duplicate = await categoryName(value.toLowerCase());
         if (duplicate.length > 0) {
            throw new Error("The category name already exists");
         }
      }),
   (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return response(402, "ERROR!", res, errors.array());
      }

      const { name } = req.body;

      connection.query(`INSERT INTO categories VALUES(0, '${name.toLowerCase()}')`, (err, rows) => {
         if (err) {
            return response(500, "Internal Server Error!", res);
         }

         if (rows?.affectedRows) {
            response(200, "Successfully Added New Category!", res, `insertId : ${rows.insertId}`);
         } else {
            response(404, "Failed Add New Category!", res, "Not Found");
         }
      });
   },
];



module.exports = {
   getAllCategories,
   addNewCategory,
};
