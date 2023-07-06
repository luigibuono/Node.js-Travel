const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include the product name"],
  },
  price: {
    type: Number,
    required: [true, "Please include the product price"],
  },
});

module.exports = mongoose.model("Product", productSchema);
