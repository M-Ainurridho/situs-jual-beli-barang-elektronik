const connection = require("../config/database");

const promiseDatabase = (query) => {
   return new Promise((resolve, reject) => {
      connection.query(query, (err, rows) => {
         if (err) reject(err);

         resolve(rows);
      });
   });
};

const categoryName = async (value) => {
   try {
      const response = await promiseDatabase(`SELECT * FROM categories WHERE name='${value}'`);
      return response;
   } catch (e) {
      console.log(e);
   }
};

const brandName = async (value) => {
   try {
      const response = await promiseDatabase(`SELECT * FROM brands WHERE name='${value}'`);
      return response;
   } catch (e) {
      console.log(e);
   }
};

module.exports = {
   categoryName,
   brandName,
};
