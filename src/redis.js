const config = require("../../config");
const redis = require("redis");
const bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(config.redis_port, config.redis_host);

client.on("error", err => console.error("[REDIS] Error encountered", err));

module.exports = client;