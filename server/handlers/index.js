import bodyParser from 'koa2-formidable'
const koaDecodedQuerystring = require('koa-decoded-querystring')

export default (app) => {
	app.use(bodyParser())
	app.use(koaDecodedQuerystring())
}