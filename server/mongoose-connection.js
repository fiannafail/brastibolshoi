import mongoose from 'mongoose'
const debug = require('debug')('app:nuxt')

mongoose.Promise = Promise

export default (mongoUri) => {
	if (!mongoUri) {
		throw Error('Mongo uri is undefinded')
	}
	return mongoose
		.connect(mongoUri)
		.then((mongodb) => {
			debug('Mongo connected')

			return mongodb
		})
}
