const connection = require("../config/database");
const { body, validationResult } = require("express-validator");
const { response } = require("../response");

const getAllProducts = (req, res) => {
   const query = `SELECT *, products.id FROM products 
                     INNER JOIN categories ON categories.id = products.category_id
                     INNER JOIN brands ON brands.id = products.brand_id`;

   connection.query(query, (err, rows) => {
      if (err) {
         return response(500, "Internal Server Error!", res);
      }

      response(200, "Get All Products", res, rows);
   });
};

const getProductByCategory = (req, res) => {
   const { category } = req.params;
   const query = `SELECT *, products.id FROM products 
                     INNER JOIN categories ON categories.id = products.category_id
                     INNER JOIN brands ON brands.id = products.brand_id
                     WHERE categories.category = '${category}'`;

   connection.query(query, (err, rows) => {
      if (err) {
         return response(500, "Internal Server Error!", res);
      }

      response(200, "Get All Products", res, rows);
   });
};

const addNewProduct = [
   body("category_id").trim().notEmpty().withMessage("Input field cannot be empty"),
   body("brand_id").trim().notEmpty().withMessage("Input field cannot be empty"),
   body("name").trim().notEmpty().withMessage("Input field cannot be empty"),
   body("price").trim().notEmpty().withMessage("Input field cannot be empty"),
   body("stock").trim().notEmpty().withMessage("Input field cannot be empty"),
   body("discount").trim().notEmpty().withMessage("Input field cannot be empty"),
   (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return response(402, "ERROR!", res, errors.array());
      }

      const { category_id, brand_id, name, price, stock, discount } = req.body;

      connection.query(`INSERT INTO products VALUES(0, ${category_id}, ${brand_id}, '${name}', 'default.jpg', ${price}, 'Rupiah', ${stock}, ${discount})`, (err, rows) => {
         if (err) {
            return response(500, "Internal Server Error!", res);
         }

         if (rows?.affectedRows) {
            response(200, "Successfully Added New Product!", res, `insertId : ${rows.insertId}`);
         } else {
            response(404, "Failed Add New Product!", res, "Not Found");
         }
      });
   },
];

module.exports = {
   getAllProducts,
   addNewProduct,
   getProductByCategory,
};
