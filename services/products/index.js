require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 4002;

app.get("/", (req, res) => {
  res.json({ service: "products", message: "Hello from Product Service!" });
});

app.get("/all",(req,res)=>{
  res.json({ service: "products", message: "All products listed here!" });
})

app.listen(port, () => {
  console.log("Product service running on http://localhost:4002");
});
