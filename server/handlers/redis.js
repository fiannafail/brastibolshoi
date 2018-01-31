import redis from 'redis'
import { REDIS_KEY } from '../config'

export const redisClient = redis.createClient('redis://redis-19199.c2.eu-west-1-3.ec2.cloud.redislabs.com:19199', {no_ready_check: true});
redisClient.auth(REDIS_KEY)

const { promisify } = require('util');
export const getAsync = promisify(redisClient.get).bind(redisClient);

