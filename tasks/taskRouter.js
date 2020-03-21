const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", (res, req) => {
  db.select("*")
    .from("tasks")
    .then(res => {
      res.status(200).json();
    })
    .catch(err => {
      res.status(500).json({ message: "Sorry, can't find task" });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  db("tasks")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ return: ids });
    })

    .catch(err => {
      res.status(500).json({ message: "Can't found task" });
    });
});

module.exports = router;
