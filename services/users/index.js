require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.json({ service: "users", message: "Hello from User Service!" });
});

app.listen(port, () => {
  console.log("User service running on http://localhost:4001");
});
