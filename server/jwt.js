import jwtService from './services/jwt-service'
import jwt from 'jsonwebtoken'

import { redisClient, getAsync } from './handlers/redis'
import User from './models/user'

const debug = require('debug')('app:nuxt')

export default () => async (ctx, next) => {
	debug('jwt start')
	const { authorization } = ctx.request.header
	if (!authorization) {
		console.log('next')
		return await next()
	}
	const { username } = await jwtService.verify(authorization)
	debug('refresh token verified')
	try {
		const token = await getAsync(`token_${username}`)
		ctx.set('Authorization', token)
		ctx.set('Refresh-Token', authorization)
		debug('jwt access token recieved')
	} catch (e) {
		ctx.throw(401, { message: 'Unauthorized. Invalid Token' })
	}
	await next()
}