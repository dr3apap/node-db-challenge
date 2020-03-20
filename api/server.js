const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(helmet());

server.use(express.json());
server.get("/", (req, res) => {
  res.send(`<h1>Building Back End From Scracth<h1>`);
});

module.exports = server;
