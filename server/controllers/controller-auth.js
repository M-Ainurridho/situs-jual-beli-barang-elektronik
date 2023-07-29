const bcrypt = require("bcrypt");
const { userRegister, createRegisterToken, userLogin, searchUser } = require("../models/model-user");
const jwt = require("jsonwebtoken");
const { response } = require("../response");

const register = async (req, res) => {
   let { fullname, email, password } = req.body;

   const saltRounds = 10;
   password = bcrypt.hashSync(password, saltRounds);

   const auth = await userRegister(fullname, email, password);

   if (auth?.affectedRows) {
      jwt.sign({ data: auth.insertId }, "secret", { expiresIn: "1h" }, async (err, token) => {
         if (err) console.log(err);

         // await createRegisterToken(token, res);
         res.json({ token });
      });
   }
};

const login = async (req, res) => {
   let { email, password } = req.body;
   const user = await userLogin(email);

   if (user.length > 0) {
      checkPassword = bcrypt.compareSync(password, user[0].password);
      if (checkPassword) {
         jwt.sign({ id: user[0].id }, "@Ridhomantap11", { expiresIn: "1h" }, (err, token) => {
            if (err) console.log(err);

            res.json({ token });
         });
      } else {
         response(404, "Wrong password", res, `password`);
      }
   } else {
      response(404, "Email not registered or wrong email", res, "email");
   }
};

const infoUser = async (req, res) => {
   const user = await searchUser(req.user.id);
   res.json({ status: 200, user: user[0] });
};

module.exports = { register, login, infoUser };
