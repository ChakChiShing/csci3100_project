const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "119.236.61.138",
  user: "admindb",
  password: "Pa$$w0rd",
  database: "nodejs",
});

module.exports = pool;
