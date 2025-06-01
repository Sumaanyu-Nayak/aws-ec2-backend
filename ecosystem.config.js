module.exports = {
  apps: [
    {
      name: "gateway",
      script: "gateway/index.js"
    },
    {
      name: "users",
      script: "services/users/index.js"
    },
    {
      name: "products",
      script: "services/products/index.js"
    }
  ]
};
