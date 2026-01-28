const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Serverless Express Running 🚀");
});

module.exports = app;
