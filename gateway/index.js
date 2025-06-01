const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use("/users", createProxyMiddleware({
  target: "http://localhost:4001",
  pathRewrite: { "^/users": "" },
  changeOrigin: true
}));

app.use("/products", createProxyMiddleware({
  target: "http://localhost:4002",
  pathRewrite: { "^/products": "" },
  changeOrigin: true
}));

app.listen(3000, () => {
  console.log("API Gateway running on http://localhost:3000");
});
