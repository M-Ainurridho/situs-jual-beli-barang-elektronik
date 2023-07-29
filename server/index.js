// modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// server port
const port = 3000;

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(cors());

// Router Routes
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const brandRouter = require("./routes/brand");
const productRouter = require("./routes/product");

app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/brand", brandRouter);
app.use("/product", productRouter);
app.use("/", homeRouter);

// listening port
app.listen(port, () => {
   console.log(`Ridho Electronic | Listening at port ${port}`);
});
