import Koa from 'koa'
import http from 'http'
import Sequelize from 'sequelize'
import { Nuxt, Builder } from 'nuxt'
import passport from 'koa-passport'
import router from './routes'
const debug = require('debug')('app:nuxt')
import mongooseConnector from './mongoose-connection'
import initHandlers from './handlers'
import { MONGO_URI } from './config'
import websockets from './services/socketio'

async function start () {
	const app = new Koa()
	const host = process.env.HOST || '127.0.0.1'
	const port = process.env.PORT || 3000

	// Import and Set Nuxt.js options
	let config = require('../nuxt.config.js')
	config.dev = !(app.env === 'production')

	// Instantiate nuxt.js
	const nuxt = new Nuxt(config)

	// Build in development
	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	}
	//  Passport
	app.use(passport.initialize())
	require('./passport').configure(passport)

	// Initial handlers
	initHandlers(app)

	// JWT Handler
	//  app.use(jwtHandler())

	// Mongoose
	mongooseConnector(MONGO_URI)

	// Router
	app.use(async (ctx, next) => {
		await router.routes()(ctx, next)
	})

	app.use(async (ctx, next) => {
		await next()
		ctx.status = 200 // koa defaults to 404 when it sees that status is unset
		return new Promise((resolve, reject) => {
			ctx.res.on('close', resolve)
			ctx.res.on('finish', resolve)
			nuxt.render(ctx.req, ctx.res, promise => {
			// nuxt.render passes a rejected promise into callback on error.
				promise.then(resolve).catch(reject)
			})
		})
	})

	// socket.io
	const server = http.createServer(app.callback())
	websockets(server)

	// listen
	server.listen(port, host)
	debug('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
