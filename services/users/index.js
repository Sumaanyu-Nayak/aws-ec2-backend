const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ service: "users", message: "Hello from User Service!" });
});

app.listen(4001, () => {
  console.log("User service running on http://localhost:4001");
});
