module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": "./db.development.sqlite",
    "seederStorage": "sequelize",
    /* "logging": console.log, */
  },
  "test": {
    "dialect": "sqlite",
    "storage": "./db.test.sqlite",
    "logging": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mssql"
  }
}
