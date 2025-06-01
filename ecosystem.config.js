module.exports = {
  apps: [
    {
      name: "gateway",
      script: "./gateway/index.js",
      env: {
        PORT: 3000,
      },
    },
    {
      name: "users-service",
      script: "./users-service/index.js",
      env: {
        PORT: 4001,
      },
    },
    {
      name: "products-service",
      script: "./products-service/index.js",
      env: {
        PORT: 4002,
      },
    },
  ],
};
