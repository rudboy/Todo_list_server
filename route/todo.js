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
      text: req.query.text,
      key:req.query.key,
      isDone: req.query.isDone
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
    res.json({alllist.key,data:{alllist.text,alllist.isDone}});
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

router.get("/update", async (req, res) => {
  try {
    const Newtodo = await Todo.findById({ _id: req.query.id });
    Newtodo.isDone = req.query.isDone;
    await Newtodo.save();
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
