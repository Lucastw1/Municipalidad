// server/index.js

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const app = express();

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "olaf9999",
  database: "zoonosis_tigre",
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

app.post("/", (req, res) => {
  const { dni, localidad, fecha, nombreAnimal, tipoAnimal } = req.body;
});

/*res.json({ message: "Datos cargados exitosamente" });*/

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
