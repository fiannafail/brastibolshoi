import { Other, Category } from '../models/others'

export default {
	getOthers: async (ctx, next) => {
		try {
			const others = await Other.findAll({
				include: [Category]
			})
			ctx.body = others
		} catch (e) {
			console.log(e)
		}
	},
	addOther: async (ctx, next) => {
		try {
			const other = await Other.create(ctx.request.body, {
				include: [Category]
			})
			ctx.body = other
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

