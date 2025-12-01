const { Pool } = require("pg");
require("dotenv").config();

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
