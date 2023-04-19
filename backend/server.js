

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database_name",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MariaDB!");
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





















