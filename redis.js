const Redis = require("ioredis");
const redisClient = new Redis({
  username: "default",
  password: REDIS_PASSWORD,
  host: REDIS_HOST,
  port: REDIS_PORT,
});
module.exports = redisClient;
