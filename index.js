const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const todoRoutes = require("./route/todo");
const cors = require("cors");

const app = express();
app.use(body_parser.json(), todoRoutes);
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todo", {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  res.json("welcome sur la Todo List");
});

app.listen(process.env.PORT || 5500, () => {
  console.log("server listening");
});
