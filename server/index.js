const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeschool24",
});


app.get("/", (req, res) => {
  return res.json("Home");
});


app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});


app.listen(3001, () => {
  console.log("Listening...");
});
