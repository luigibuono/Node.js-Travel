const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please include a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please include a last name"],
  },
  email: {
    type: String,
    required: [true, "Please include an email"],
  },
});

module.exports = mongoose.model("User", userSchema);
