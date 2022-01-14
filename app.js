const path = require("path");
const express = require("express");
const app = express();

app.listen(3030, () => {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/babbage", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/babbage.html"));
});

app.get("/berners", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/clarke.html"));
});
