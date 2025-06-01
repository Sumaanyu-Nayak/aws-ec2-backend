const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ service: "products", message: "Hello from Product Service!" });
});

app.get("all",(req,res)=>{
  res.json({ service: "products", message: "All products listed here!" });
})

app.listen(4002, () => {
  console.log("Product service running on http://localhost:4002");
});
