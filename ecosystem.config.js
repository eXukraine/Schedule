module.exports = {
  apps : [{
    name: 'API',
    script: './.bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
      HOST: 'localhost'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
