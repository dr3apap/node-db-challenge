const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("users")
    .then(user => {
      res.status(200).json({ return: user });
    })
    .catch(err => {
      res.status(500).json({
        message: "Sorry no user found",
      });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  db("users")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ return: ids });
    })

    .catch(err => {
      res.status(500).json({ message: "Can't found user" });
    });
});

module.exports = router;
