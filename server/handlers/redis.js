import redis from 'redis'
import { REDIS_URL } from '../config'

export const redisClient = redis.createClient(REDIS_URL)

redisClient.on('error', function (err) {
	console.log('Error ' + err)
})

const { promisify } = require('util')
export const getAsync = promisify(redisClient.get).bind(redisClient)

