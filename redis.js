const Redis = require("ioredis");
const redisClient = new Redis({
  username: "default",
  password: "XK7KU8fC12v4TUENJTjGBCkJqcTKY75V",
  host: "redis-13727.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
  port: 13727,
});
module.exports = redisClient;

// XK7KU8fC12v4TUENJTjGBCkJqcTKY75V

// const { createClient } = require("redis");

// const client = createClient({
//   username: "default",
//   password: "XK7KU8fC12v4TUENJTjGBCkJqcTKY75V",
//   socket: {
//     host: "redis-13727.c1.ap-southeast-1-1.ec2.cloud.redislabs.com",
//     port: 13727,
//   },
// });

// client.on("error", (err) => console.log("Redis Client Error", err));

// client.connect();

// module.exports = client;
