const express = require("express");
const cors = require("cors");
const router = express.Router();
const body_parser = require("body-parser");
const mongoose = require("mongoose");
router.use(body_parser.json(), cors());

const Todo = require("../Models/todo_model");

router.get("/create_list", async (req, res) => {
  try {
    const newList = new Todo({
      title: req.query.title,
      mark: req.query.mark
    });

    await newList.save();
    res.json({ message: "New activited created" });
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

router.get("/all_list", async (req, res) => {
  try {
    const alllist = await Todo.find();
    res.json(alllist);
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

router.get("/update", async (req, res) => {
  try {
    let id = req.query.id;
    const Todo = await Todo.findById(id);
    Todo.mark = true;
    await Todo.save();
    res.json("modification ok");
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

router.get("/delete", async (req, res) => {
  try {
    const deleteproduct = await Todo.findById({ _id: req.query.id });

    await deleteproduct.remove();
    res.json("Delete okay");
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

module.exports = router;
