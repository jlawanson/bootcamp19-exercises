const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/miri", (req, res) => {
  res.sendFile(path.join(__dirname + "/miri.html"));
});

app.get("/adiah", (req, res) => {
  res.sendFile(path.join(__dirname + "/adiah.html"));
});

app.get("/jesus", (req, res) => {
  res.sendFile(path.join(__dirname + "/jesus.html"));
});

app.listen(3000);
console.log("Running at port 3000");
