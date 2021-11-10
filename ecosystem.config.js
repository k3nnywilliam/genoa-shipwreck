module.exports = {
  apps : [{
    name: "app",
    script: 'dist/server.js',
    instances: "max",
    watch: '.'
  },],
  env: {
    NODE_ENV: "development",
  },
  env_production: {
    NODE_ENV: "production",
  }
};
