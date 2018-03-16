import { Advice } from '../models/advice'

export default {
	updateAdvice: async (ctx, next) => {
		try {
			const advice = await Advice.findOne({
				where: {
					id: ctx.request.body.id
				}
			})
			const updates = await advice.updateAttributes(ctx.request.body)
			ctx.body = updates
		} catch (e) {
			console.log(e)
		}
	},
	getAdvices: async (ctx, next) => {
		try {
			const advices = await Advice.findAll({
				attributes: ['content', 'id']
			})
			ctx.body = advices
		} catch (e) {
			console.log(e)
		}
	},
	addAdvice: async (ctx, next) => {
		try {
			const advice  = await Advice.create(ctx.request.body)
			ctx.body = advice
		} catch (e) {
			console.log(e)
		}
	}
}