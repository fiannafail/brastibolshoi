import redis from 'redis'
import { Cartoon, AgeCategory, Tag } from '../models/cartoon'
const debug = require('debug')('app:nuxt')
import { redisClient, getAsync } from '../handlers/redis'

export default {
	getMultiseries: async (ctx, next) => {
		try {
			const multiseries = await Cartoon.find({ isMultiseries: true })
			ctx.body = multiseries.map(item => {
				return {
					_id: item._id,
					title: item.title
				}
			})
		} catch (e) {
			console.log(e)
		}
	},
	getTags: async (ctx, next) => {
		try {
			const tags = await Tag.find().distinct('_id')
			ctx.body = tags
		} catch (e) {
			console.log(e)
		}
	},
	addTag: async (ctx, next) => {
		let tags = []
		try {
			for (let i in ctx.request.body) {
				tags.push({ name:  ctx.request.body[i]})
			}
			console.log(tags)
			const tag = await Tag.create(tags)
			ctx.body = tag
		} catch (e) {
			console.log(e)
		}
	},
	addAgeCategory: async (ctx, next) => {
		try {
			const category = new AgeCategory(ctx.request.body)
				// name: 'half',
				// slug: 'half',
				// description: 'halfdesc'
			category.save()
			ctx.body = category
		} catch (e) {
			console.log(e)
		}
	},
	getCategories: async (ctx, next) => {
		try {
			const categories = await AgeCategory.find()
			ctx.body = categories
		} catch (e) {
			console.log(e)
		}
	},
	add: async (ctx, next) => {
		try {
			const cartoon = await new Cartoon(ctx.request.body)
			cartoon.save()
			ctx.body = cartoon
			await redisClient.set(`cartoon`, cartoon._id.toString(), redis.print);
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
	},
	getRedis: async (ctx, next) => {
		try {
			const el = await getAsync(`cartoon`)
			ctx.body = el
		} catch (e) {
			console.log(e)
			ctx.body = e
		}
	},
	getMongo: async (ctx, next) => {
		try {
			const cartoon = await Cartoon.find({ _id: '5a74e75c180fa800bba8fe3e' })
			ctx.body = cartoon
		} catch (e) {
			console.log(e)
			ctx.body = e
		}
	}
}