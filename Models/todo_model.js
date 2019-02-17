const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    default: ""
  },
  isDone: {
    type: Boolean,
    default: false
  },
  key:{
    type: String,
    default: ""
  }
});

module.exports = Todo;
