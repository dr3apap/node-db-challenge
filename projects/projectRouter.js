const express = require("express");
const taskRouter = require("../tasks/taskRouter");

router.use("/:id/tasks", (req, res) => {});

router.get("/:id", (req, res) => {});
router.post("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

module.exports = router;
