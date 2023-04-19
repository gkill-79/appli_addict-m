
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const authRoutes = require("./auth.routes");
const session = require("express-session");
const MariaDBStore = require("express-mariadb-session")(session);
const dbConfig = require("./config/db.config");

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

app.use(
  session({
    secret: "your_secret_key",
    store: new MariaDBStore(dbConfig),
    resave: false,
    saveUninitialized: false,
  })
);

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = { app, db };
















