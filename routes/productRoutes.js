const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");

//Get back all products
router.get("/", getProducts);

//Get back a single product
router.get("/:productId", getSingleProduct);

//Post a product
router.post("/", postProduct);

//Update a product
router.patch("/:productId", updateProduct);

//Delete a product
router.delete("/:productId", deleteProduct);

module.exports = router;
