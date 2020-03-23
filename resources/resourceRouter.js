const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("resources")
    .then(resource => {
      res.status(200).json({ return: resource });
    })
    .catch(err => {
      res.status(500).json({
        message: "Sorry no resource found",
      });
    });
});

router.post("/", (req, res) => {
  db("resources")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json({ return: ids });
    })

    .catch(err => {
      res.status(500).json({ message: "Can't found resource" });
    });
});

router.delete("/:id", (req, res) => {
  db("resources")
    .where({ id: req.params.id })
    .del()
    .then(resource => {
      if (resource > 0) {
        res.end();
      } else {
        res.status(404).json({ message: "resource not found" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "sorry can't delete resource " });
    });
});

module.exports = router;
