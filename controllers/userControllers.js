const User = require("../models/user");

const userList = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res
        .status(404)
        .json({ error: `No product with id ${req.params.productId}` });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const postUser = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json({ success: true, data: savedUser });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
        },
      },
      { upsert: true }
    );
    res.status(200).json({
      success: true,
      message: `Item with id ${req.params.userId} updated`,
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId });
    res.status(200).json({
      success: true,
      message: `Item with id ${req.params.userId} deleted`,
      data: removedUser,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = {
  userList,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser,
};
