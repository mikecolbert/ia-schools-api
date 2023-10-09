const env = process.env;
const fs = require("fs");

const db = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_USER_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT || 3306,
  ssl: {
    ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem"),
  },
};

module.exports = db;
