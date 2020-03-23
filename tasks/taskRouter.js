const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("tasks")

    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Sorry, can't find task" });
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  db("tasks")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ return: ids });
    })

    .catch(err => {
      res.status(500).json({ message: "please include a task" });
    });
});

router.delete("/:id", (req, res) => {
  db("tasks")
    .where({ id: req.params.id })
    .del()
    .then(task => {
      if (task > 0) {
        res.end();
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "sorry can't delete task " });
    });
});
module.exports = router;
