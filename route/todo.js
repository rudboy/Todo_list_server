const express = require("express");
const router = express.Router();
const body_parser = require("body-parser");
const mongoose = require("mongoose");
router.use(body_parser.json());

const Todo = require("../Models/todo_model");

router.get("/create_list", async (req, res) => {
  try {
    const newList = new Todo({
      title: req.query.title,
      mark: req.query.mark
    });

    await newList.save();
    res.json({ message: "New activited created" });
    // for (let i = 0; i <= req.body.length - 1; i++) {
    //   // FIND = récupère un tableau d'objets
    //   // FINDONE = récupère un objet
    //   const existingList = await Todo.findOne({
    //     title: req.query[i].title,
    //     mark: req.query[i].mark
    //   });

    //   if (existingList === null) {
    //     const newList = new Todo({
    //       title: req.query[i].title,
    //       mark: req.query[i].mark
    //     });

    //     await newList.save();
    //     res.json({ message: "New activited created" });
    //   } else {
    //     res.status(400).json({
    //       error: {
    //         message: "Activited already exists"
    //       }
    //     });
    //   }
    // }
  } catch (error) {
    res.status(400).json({ error: { message: error.message } });
  }
});

module.exports = router;
