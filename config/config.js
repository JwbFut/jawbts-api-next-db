module.exports = {
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "port": process.env.POSTGRES_PORT,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  },
  "test": {
    "username": "postgres",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
