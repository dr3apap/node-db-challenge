const express = require("express");
const helmet = require("helmet");
const resourceRouter = require("../resources/resourceRouter");
const taskRouter = require("../tasks/taskRouter");
const projectRouter = require("../projects/projectRouter");

const server = express();
server.use(helmet());

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Building Back End From Scracth<h1>`);
});

module.exports = server;
