const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool({
//   database: process.env.DATABASE_name,
//   host: process.env.DATABASE_host,
//   password: process.env.DATABASE_password,
//   user: process.env.DATABASE_user,
//   port: process.env.DATABASE_PORT,
// });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.log("No connnection string found");
  console.error("DATABASE_URL environment variable is not set.");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
});

module.exports = pool;
