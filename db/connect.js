const mongoose= require("mongoose");
const dotenv = require ("dotenv");
const cors = require("cors");




dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successfull!"))
.catch(() => {
  console.log(err);
});


module.exports = connectDb;