const express = require("express");
const app = express();

const dotenv = require("dotenv");
const userRoute = require ("./routes controllers/user");
const authRoute = require("./middleware/auth");
const productRoute = require("./routes controllers/product");
const orderRoute = require("./routes controllers/order");

//middleware
app.use(express.json());

const connectDb = require("./db/connect");

const cors = require("cors");

dotenv.config();



app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

//routes

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.use("/api/orders", orderRoute);


const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`App is listening on port ${port}`);
  try {
    await connectDb();
    console.log("connect to MongoDB");
  } catch (error) {
    console.log("Couldn't connect to MongoDB", error);
  }
});
