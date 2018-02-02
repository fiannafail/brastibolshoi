import redis from 'redis'
import { REDIS_KEY } from '../config'

export const redisClient = redis.createClient({
	host: '127.0.0.1',
	port: '6379',
	no_ready_check: true
});

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

const { promisify } = require('util');
export const getAsync = promisify(redisClient.get).bind(redisClient);

