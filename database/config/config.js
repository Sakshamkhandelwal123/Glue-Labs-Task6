require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'GE$6du@1',
    database: 'test_graphql',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DEV_DATABASE_URL',
  },
  test: {
    username: 'postgres',
    password: 'GE$6du@1',
    database: 'test_graphql',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DEV_DATABASE_URL',
  },
  production: {
    username: 'postgres',
    password: 'GE$6du@1',
    database: 'test_graphql',
    host: '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DEV_DATABASE_URL',
  },
};

