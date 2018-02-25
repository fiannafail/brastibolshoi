import redis from 'redis'
import jwtService from '../services/jwt-service'
import User from '../models/user'
import { redisClient, getAsync } from '../handlers/redis'

const debug = require('debug')('app:nuxt')

export default () => async (ctx, next) => {
	debug('token has not recieved')
	const token = ctx.response.header.authorization
	let decoded = null
	if (!token) {
		ctx.throw(403, { message: 'Unauth' })
	}
	try {
		decoded = await jwtService.verify(token)
	} catch (e) {
		const refreshToken = ctx.response.header['refresh-token']
		decoded = await jwtService.verifyNoExp(token)
		const confirmedRefreshToken = await getAsync(`refreshToken${decoded.username}`)
		if (e.name === 'TokenExpiredError' && confirmedRefreshToken === refreshToken) {
			const newAccessToken = await jwtService.genToken({ id: decoded._id, username: decoded.username }, '2m')
			const newRefreshToken = await jwtService.genToken({ username: decoded.username }, '30d')
			await redisClient.set(`token_${decoded.username}`, newAccessToken, redis.print)
			await redisClient.set(`refreshToken${decoded.username}`, newRefreshToken, redis.print)
		}
	}
	debug('token recieved')
	try {
		const user = await User.findOne({ username: decoded.username })
		debug('user found', user)
		next()
	} catch (e) {
		ctx.throw(403, { message: 'Unauth' })
	}
}