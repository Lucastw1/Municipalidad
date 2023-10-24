// server/index.js

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const path = require("path");

const app = express();

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "olaf9999",
  database: "zoonosis_tigre",
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
