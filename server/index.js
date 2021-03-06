import Koa from 'koa'
import http from 'http'
import { Nuxt, Builder } from 'nuxt'
import passport from 'koa-passport'
import router from './routes'
const debug = require('debug')('app:nuxt')
import initHandlers from './handlers'
import sequelize from './postgres-connector'

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

	// Postgres / Sequelize
	sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.')
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err)
	})

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

	const server = http.createServer(app.callback())

	// listen
	server.listen(port, host)
	debug('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
