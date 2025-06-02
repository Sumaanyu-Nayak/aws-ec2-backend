module.exports = {
  apps: [
    {
      name: 'gateway',
      script: './gateway/index.js',
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'users-service',
      script: './services/users/index.js',
      watch: true,
      env: {
        PORT: 4001,
        NODE_ENV: 'production',
      },
    },
    {
      name: 'products-service',
      script: './services/products/index.js',
      watch: true,
      env: {
        PORT: 4002,
        NODE_ENV: 'production',
      },
    },
  ],
};
