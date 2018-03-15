import { Advice } from '../models/advice'

export default {
	addAdvice: async (ctx, next) => {
		try {
			const advice  = await Advice.create(ctx.request.body)
			ctx.body = advice
		} catch (e) {
			console.log(e)
		}
	}
}