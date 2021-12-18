module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOSTNAME,
    dialect: 'postgres',
  },
  production: {
    // heroku postgres config
    use_env_variable: 'DATABASE_URL', // eslint-disable-line camelcase
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
