import Sequelize from 'sequelize'
import redis from 'redis'
import { getAsync, redisClient } from '../handlers/redis'
import slugify from 'slug-generator'
var _ = require('lodash')
import { Cartoon, Tag, Categories } from '../models/cartoon'
const Op = Sequelize.Op

export default {
	setTag: async (ctx, next) => {
		try {
			console.log(ctx.request.body)
			// const tag = await redisClient.set(slugify(body.name), body.description + ', ' + body.name, redis.print)
			// ctx.body = tag
		} catch (e) {
			console.log(e)
		}
	},
	getTag: async (ctx, next) => {
		try {
			const tag = await getAsync(ctx.params.name)
			ctx.body = tag
		} catch (e) {
			console.log(e)
		}
	},
	getCartoonBySlug: async(ctx, next) => {
		try {
			const cartoon = await Cartoon.findOne({
				where: {
					slug: ctx.params.cartoon
				},
				include: [Tag, Categories]
			})
			ctx.body = cartoon
		} catch (e) {
			console.log(e)
		}
	},
	getTagByName: async(ctx, next) => {
		try {
			const tag = getAsync(ctx.params.tag)
			const cartoons = Cartoon.findAll({
				include:[{
					model: Tag,
					where: {
						name: ctx.params.tag
					}

				}, {
					model: Categories,
					where: {
						slug: ctx.params.category
					}
				}]
			})
			const requests = await Promise.all([tag, cartoons])
			console.log({ tag: requests[0], cartoons: requests[1] })
			ctx.body = { tag: requests[0], cartoons: requests[1] }
		} catch (e) {
			console.log(e)
		}
	},
	getCartoonsByTag: async (ctx, next) => {
		ctx.set('Content-Type', 'text/plain; charset=utf-8')
		console.log('tag', ctx.params)
		try {
			const tagRequest = await getAsync(ctx.params.tag)
			const tag = tagRequest.split(', ')
			const cartoons = await Cartoon.findAll({
				include: [{
					model: Tag,
					where: {
						name: tag[1]
					}
				}, Categories]
			})
			console.log(tag[1], cartoons)
			ctx.body = { tag: tagRequest, cartoons: cartoons }
		} catch (e) {
			console.log(e)
		}
	},
	getMultiseries: async (ctx, next) => {
		try {
			const multiseries = await Cartoon.findAll({
				where: { isMultiseries: true }
			})
			ctx.body = multiseries
		} catch (e) {
			console.log(e)
		}
	},
	getCategoryCartoons: async (ctx, next) => {
		const limit = 5
		try {
			const category = await Cartoon.findAll({
				limit: limit,
				order: [['createdAt', 'DESC']],
				where: { isMultiseries: true },
				include: [{
					model: Categories,
					where: {
						slug: ctx.params.slug
					}
				}, Tag]
			})
			ctx.body = category
		} catch (e) {
			console.log(e)
		}
	},
	getMoreCartoons: async (ctx, next) => {
		const limit = 5
		const offset = parseInt(ctx.params.id)
		const category = ctx.params.category !== 'undefined' ? ctx.params.category : { [Op.ne]: null }
		console.log(category)
		const cartoons = await Cartoon.findAll({
			offset: offset * limit,
			limit: limit,
			order: [['createdAt', 'DESC']],
			include: [{
				model: Tag,
				through: {
					attributes: ['tag_id']
				}
			}, {
				model: Categories,
				where: {
					slug: category
				}
			}]
		})
		ctx.body = cartoons
	},
	getCartoons: async (ctx, next) => {
		const cartoons = await Cartoon.findAll({
			order: [['createdAt', 'DESC']],
			include: [{
				model: Tag,
				through: {
					attributes: ['tag_id']
				}
			}, Categories]
		})
		ctx.body = cartoons
	},
	addCategory: async (ctx, next) => {
		try {
			const categories = await Categories.create(ctx.request.body)
			ctx.body = categories
		} catch (e) {
			console.log(e)
		}
	},
	getCategories: async (ctx, next) => {
		try {
			const categories = await Categories.findAll(
				{ order: ['createdAt'] }
			)
			ctx.body = categories
		} catch (e) {
			console.log(e)
		}
	},
	getTags: async (ctx, next) => {
		try {
			const tags = await Tag.findAll({
				attributes: ['name'],
				group: ['name'],
				raw: true
			})
			ctx.body = tags
		} catch (e) {
			console.log(e)
		}
	},
	add: async (ctx, next) => {
		const cartoon = await Cartoon.create(ctx.request.body, {
			include: [Tag, Categories]
		})
		ctx.body = cartoon
	},
	setTag: async (ctx, next) => {
		const tag = await Cartoon.setTags(['tag1', 'tag2'])
		ctx.body = tag
	}
}
