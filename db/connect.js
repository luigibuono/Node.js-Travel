const mongoose= require("mongoose");
const dotenv = require ("dotenv");





dotenv.config()

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successfull!"))
.catch(() => {
  console.log(err);
});
};

module.exports = connectDb;
