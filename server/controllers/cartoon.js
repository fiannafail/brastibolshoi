import Cartoon from '../models/cartoon'
const debug = require('debug')('app:nuxt')
import { redisClient, getAsync } from '../handlers/redis'

export default {
	add: async (ctx, next) => {
		try {
			const cartoon = await new Cartoon(ctx.request.body)
			cartoon.save()
			ctx.body = cartoon
		} catch (e) {
			console.log(e)
		}
	},
	getAll: async (ctx, next) => {
		debug('start getting')
		const cartoons = await Cartoon.find({})
		if (cartoons) {
			ctx.body = cartoons
		} else {
			ctx.body = 'Nothing was found'
		}
		
		debug('finish getting')
	},
	getOne: async (ctx, next) => {
		const cartoon = await Cartoon.find({ slug: ctx.params.slug })
		ctx.body = cartoon
	}
}