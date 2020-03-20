const express = require("express");
const router = express.Router({
  mergerParams: true,
});

router.get("/:id/tasks", (res, req) => {});

module.exports = router;
