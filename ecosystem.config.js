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


module.exports = {
  apps: [
    {
      name: 'gateway',
      script: 'gateway/index.js',
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'users',
      script: 'services/users/index.js',
      watch: true,
      env: {
        PORT: 4001,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'products',
      script: 'services/products/index.js',
      watch: true,
      env: {
        PORT: 4002,
        NODE_ENV: 'production',
      },
    },
  ],
};
