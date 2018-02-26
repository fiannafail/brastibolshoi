import { Audio, Category } from '../models/audio'

export default {
	getByCategory: async (ctx, next) => {
		try {
			const audios = await Audio.findAll({
				include: [{
					model: Category,
					where: {
						slug: ctx.params.category
					}
				}]
			})
			ctx.body = audios
		} catch (e) {
			console.log(e)
		}
	},
	getAudios: async (ctx, next) => {
		try {
			const audios = await Audio.findAll({
				include: [Category]
			})
			ctx.body = audios
		} catch (e) {
			console.log(e)
		}
	},
	getCategories: async (ctx, next) => {
		try {
			const categories = await Category.findAll()
			ctx.body = categories
		} catch (e) {
			console.log(e)
		}
	},
	addAudio: async (ctx, next) => {
		try {
			const audio = await Audio.create(ctx.request.body, {
				include: [Category]
			})
			ctx.body = audio
		} catch (e) {
			console.log(e)
		}
	},
	addCategory: async (ctx, next) => {
		try {
			const category = await Category.create(ctx.request.body)
			ctx.body = category
		} catch (e) {
			console.log(e)
		}
	}
}
