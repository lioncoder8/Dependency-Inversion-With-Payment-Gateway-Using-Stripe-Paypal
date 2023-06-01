require("dotenv").config();
const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "postgres",
  operatorsAliases: 0,
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false,
  },
};
const test = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "postgres",
  operatorsAliases: 0,
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false,
  },
};
const production = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "postgres",
  operatorsAliases: 0,
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false,
  },
};

module.exports = {
  development,
  test,
  production,
};
