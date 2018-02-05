import Router from 'koa-router'
const debug = require('debug')('app:nuxt')
const fs = require('fs');
const os = require('os');
const path = require('path');

import User from './controllers/user'
import Cartoon from './controllers/cartoon'

import checkUser from './handlers/checkUser'
import putToken from './jwt'

const router = new Router()

router.post('/user', User.signUp)
router.post('/login', User.signIn)
//	router.get('/admin', putToken(), checkUser())
router.get('/custom',
	checkUser(),
	async (ctx, next) => {
		ctx.body = 'Hello!'
		debug('page rendered')
	})

router.post('/addcartoon', Cartoon.add)
router.get('/getcartoons', Cartoon.getAll)
router.get('/cartoon/:slug', Cartoon.getOne)
router.get('/redis', Cartoon.getRedis)
router.get('/mongo', Cartoon.getMongo)
router.get('/getcats', Cartoon.getCategories)
router.post('/addcat', Cartoon.addAgeCategory)
router.post('/upload', async (ctx, next) => {
	console.log(ctx.request.files)
	const file = ctx.request.body.files.file;
	const reader = fs.createReadStream(file.path);
	const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
	reader.pipe(stream);
	console.log('uploading %s -> %s', file.name, stream.path);
})
export default router