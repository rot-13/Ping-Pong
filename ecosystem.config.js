module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Ping-Pong',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'pi',
      host : '10.0.0.159',
      ref  : 'origin/master',
      repo : 'https://github.com/rot-13/Ping-Pong.git',
      path : '/home/pi/Ping-Pong/production',
      'post-deploy' : 'npm install && ./node_modules/knex/lib/bin/cli.js migrate:latest && pm2 reload ecosystem.config.js --env production'
    }
  }
};
