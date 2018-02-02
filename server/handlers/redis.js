import redis from 'redis'
import { REDIS_KEY } from '../config'

export const redisClient = redis.createClient('redis://nuxt-app:af7398128c819113875d6447f312234ce61db4feecacf8a0082f2b9e298cafbd@dokku-redis-nuxt-app:6379');

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

const { promisify } = require('util');
export const getAsync = promisify(redisClient.get).bind(redisClient);

