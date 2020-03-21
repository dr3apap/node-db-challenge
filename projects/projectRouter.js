const express = require("express");
const db = require("../data/db-config");
// const taskRouter = require("../tasks/taskRouter");

const router = express.Router();

// router.use("/:id/tasks", taskRouter);

router.get("/", (req, res) => {
  // const projects =
  db.select("*")
    .from("project")

    .then(rows => {
      res.status(200).json({ data: rows });
    })
    .catch(err => {
      res.status(500).json({
        message: "There's no project",
      });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  db("project")
    .insert(req.body, "id")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(404).send({
        message: "Sorry ran into an error",
      });
    });
});

router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
