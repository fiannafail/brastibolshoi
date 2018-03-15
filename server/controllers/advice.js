import { Advice } from '../models/advice'

export default {
	getAdvices: async (ctx, next) => {
		try {
			const advices = await Advice.findAll({
				attributes: ['id', 'content']
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