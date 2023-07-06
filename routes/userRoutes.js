const express = require("express");
const router = express.Router();
const {
  userList,
  getSingleUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

//Get back all users
router.get("/", userList);

//Get back a specific user
router.get("/:userId", getSingleUser);

//Post a new user
router.post("/", postUser);

//Update a user
router.patch("/:userId", updateUser);

//Delete a specific user
router.delete("/:userId", deleteUser);

module.exports = router;
