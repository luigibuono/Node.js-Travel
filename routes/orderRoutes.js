const express = require("express");
const router = express.Router();

const {
  getOrders,
  getSingleOrder,
  getOrderByDate,
  getOrderByProduct,
  postOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/ordersControllers");

//Get back all orders
router.get("/", getOrders);

//get back a single order
router.get("/:orderId", getSingleOrder);

//get back orders of a certain date
router.get("/createdOn/:orderDate", getOrderByDate);

//get back orders wich contains a product
router.get("/containsProduct/:productId", getOrderByProduct);

//Post a new order
router.post("/", postOrder);

//Update an order
router.patch("/:orderId", updateOrder);

//Delete an order
router.delete("/:orderId", deleteOrder);

module.exports = router;
