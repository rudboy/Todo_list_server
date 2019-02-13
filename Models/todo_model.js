const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  title: {
    type: String,
    default: ""
  },
  mark: {
    type: Boolean,
    default: true
  }
});

module.exports = Todo;
