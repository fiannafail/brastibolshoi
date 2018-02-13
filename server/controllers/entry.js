import { Entry } from '../models/entry'
export default {
	addEntry: async (ctx, next) => {
		try {
			const entry = new Entry(ctx.request.body)
			entry.save()
			ctx.body = entry
		} catch (e) {
			console.log(e)
		}
	}
}
