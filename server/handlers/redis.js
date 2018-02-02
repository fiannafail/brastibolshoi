import redis from 'redis'
import { REDIS_KEY } from '../config'

export const redisClient = redis.createClient('redis://nuxt-redis:ad26d5d14d28c2a7c31001b935ce2f45377f5d1d121cf9ef7f6a7730ea2647fe@dokku-redis-nuxt-redis:6379');

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

const { promisify } = require('util');
export const getAsync = promisify(redisClient.get).bind(redisClient);

