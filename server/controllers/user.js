import redis from 'redis'
import passport from 'koa-passport'
import User from '../models/user'
import jwtService from '../services/jwt-service';
import { redisClient, getAsync } from '../handlers/redis'

export default {
	signUp: async (ctx, next) => {
		console.log(ctx.request.body)
		try {
			const user = await new User(ctx.request.body)
			await user.save()
			ctx.body = user
		}
		catch (err) {
			ctx.status = 400;
			ctx.body = err
			console.log(err)
		}
	},
	signIn: async (ctx, next) => {
		await passport.authenticate('local', async (err, user) => {
			const { email, password } = ctx.request.body;
			if (user == false) {
				ctx.body = "Login failed"
			} else {
				const accessToken = await jwtService.genToken({ id: user._id, username: user.username }, '2m')
				const refreshToken = await jwtService.genToken({ username: user.username }, '30d')
				ctx.body = { 
					accessToken: accessToken,
					refreshToken: refreshToken
				}
				await redisClient.set(`token_${user.username}`, accessToken, redis.print);
				await redisClient.set(`refreshToken${user.username}`, refreshToken, redis.print);
				return ctx.login(user)
			}
		})(ctx, next)
	}
}