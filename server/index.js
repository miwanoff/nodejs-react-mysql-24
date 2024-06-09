const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/users", (req, res) => {
  //const sql = "SELECT * FROM users";
  const sql =
    "SELECT * FROM users WHERE `email` = '" +
    req.body.email +
    "' AND `password` = '" +
    req.body.password +
    "'";
  console.log(sql);

  db.query(sql, (err, data) => {
    // if (err) return res.json(err);
    // return res.json(data);
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(3001, () => {
  console.log("Listening...");
});
