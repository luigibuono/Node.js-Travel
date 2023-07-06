const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const users = await Product.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res
        .status(404)
        .json({ error: `No product with id ${req.params.productId}` });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const postProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const savedProduct = await product.save();
    res.status(201).json({ success: true, data: savedProduct });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
        },
      },
      { upsert: true }
    );
    res.status(200).json({
      success: true,
      message: `Item with id ${req.params.productId} updated`,
      data: updatedProduct,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.json({
      success: true,
      message: `Item with id ${req.params.productId} deleted`,
      data: removedProduct,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
