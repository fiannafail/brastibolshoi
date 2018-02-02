import redis from 'redis'
import { REDIS_KEY } from '../config'

export const redisClient = redis.createClient('redis://46.101.221.53:6379', {no_ready_check: true});
redisClient.auth(REDIS_KEY)

const { promisify } = require('util');
export const getAsync = promisify(redisClient.get).bind(redisClient);

