import Sequelize from 'sequelize'
import { Cartoon, Tag, CartoonTags, Categories } from '../models/_cartoon'

export default {
	getCartoons: async (ctx, next) => {
		const cartoons = await Cartoon.findAll({
			include: [{
				model: Tag,
				through: {
					attributes: ['tag_id']
				}
			}]
		})
		console.log(cartoons)
		ctx.body = cartoons
	},
	addCategory: async (ctx, next) => {
		await Categories.create(ctx.request.body)
	},
	getcats: async (ctx, next) => {
		const cats = await Tag.findAll({
			attributes: ['name'],
			includeIgnoreAttributes: false,
			raw: true,
			group: ['name'],
			include: {
				model: Cartoon,
				attributes: []
			}
		});
		console.log(cats)
		ctx.body = cats
	},
	add: async (ctx, next) => {
		const cartoon = await Cartoon.create(ctx.request.body, {
			include: [ Tag, Categories]
		})
		ctx.body = cartoon
	}
}
