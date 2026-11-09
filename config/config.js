require("dotenv").config();

const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: DB_DIALECT,
}

const production = {
  use_env_variable: "DATABASE_URL",
  dialect: DB_DIALECT,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

module.exports = {
  development,
  production
};