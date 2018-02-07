import Router from 'koa-router'
const debug = require('debug')('app:nuxt')
const fs = require('fs');
const os = require('os');
const path = require('path');
const multer = require('koa-multer');
const upload = multer({ dest: 'uploads/' });

var cloudinary = require('cloudinary');

cloudinary.config({ 
	cloud_name: 'rastibolshoi', 
	api_key: '374329698237239', 
	api_secret: 'Kax6e6xy_FakEfMUc61P_3XUS_I' 
});

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
router.get('/gettags', Cartoon.getTags)
router.post('/addcat', Cartoon.addAgeCategory)
router.post('/addtag', Cartoon.addTag)
router.post('/up', upload.single('file'),  async (ctx, next) => {
	console.log(ctx.request.files.file)
})
router.post('/upload', async (ctx, next) => {
	const file = ctx.request.files.file.path
	const image = await cloudinary.uploader.upload(file)
	console.log(image.secure_url) 
	ctx.body = image.secure_url
})

export default router
