const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  title: {
    type: String,
    default: ""
  },
  mark: {
    type: Boolean,
    default: false
  },
  key:{
    type: String,
    default: ""
  }
});

module.exports = Todo;
