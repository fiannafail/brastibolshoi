import { Others, Category } from '../models/others'

export default {
	addCategory: async (ctx, next) => {
		try {
			const category = await Category.create(ctx.request.body)
			ctx.body = category
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
	}
}

