const connection = require("../config/database");

const promiseDatabase = (query) => {
   return new Promise((resolve, reject) => {
      connection.query(query, (err, rows) => {
         if (err) reject(err);

         resolve(rows);
      });
   });
};

const userRegister = async (name, email, password) => {
   try {
      const response = await promiseDatabase(`INSERT INTO users VALUES(0, '${name}', '${email}', '${password}', 'default.jpg', 2, 0, ${Date.now()})`);

      return response;
   } catch (err) {
      console.error(err);
   }
};

const userLogin = async (email) => {
   try {
      const response = await promiseDatabase(`SELECT * FROM users WHERE email = '${email}'`);
      return response;
   } catch (err) {
      console.error(err);
   }
};

const searchUser = async (id) => {
   try {
      const response = await promiseDatabase(`SELECT * FROM users WHERE id = ${id}`);
      return response;
   } catch (err) {
      console.error(err);
   }
};

const createRegisterToken = async (token) => {
   try {
      const response = await promiseDatabase(`INSERT INTO temp VALUES(0, '${token}')`);
      return;
   } catch (err) {
      console.error(err);
   }
};

const checkEmail = async (email) => {
   try {
      const response = await promiseDatabase(`SELECT * FROM users WHERE email = '${email}'`);
      return response;
   } catch (err) {
      console.error(err);
   }
};

module.exports = { userRegister, userLogin, checkEmail, createRegisterToken, searchUser };
