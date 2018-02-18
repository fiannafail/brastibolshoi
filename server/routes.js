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
import Entry from './controllers/entry'
import Cartoon from './controllers/cartoon'

import _Cartoon from './controllers/_cartoon'

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
router.get('/api/cartoons/:slug', _Cartoon.getCategoryCartoons)
//	router.get('/cartoon/:slug', Cartoon.getOne)
router.get('/redis', Cartoon.getRedis)
router.get('/mongo', Cartoon.getMongo)
router.get('/getcats', Cartoon.getCategories)
router.get('/getcategories', _Cartoon.getCategories)
router.get('/api/cartoons/page/:id/:category', _Cartoon.getMoreCartoons)
router.get('/api/cartoons', _Cartoon.getCartoons)
router.get('/api/gettagbyname/:category/:tag', _Cartoon.getTagByName)
router.get('/api/getcartoonbyslug/:cartoon', _Cartoon.getCartoonBySlug)
router.get('/api/getcartoonsbytag/:tag', _Cartoon.getCartoonsByTag)
router.get('/gettags', _Cartoon.getTags)
router.post('/settag', _Cartoon.setTag)
router.post('/add', _Cartoon.add)
router.post('/addcategory', _Cartoon.addCategory)
router.post('/addcat', Cartoon.addAgeCategory)
router.post('/addtag', Cartoon.addTag)
router.get('/getmultiseries', _Cartoon.getMultiseries)
router.post('/up', async (ctx, next) => {
	const file = ctx.request.files.file
	const reader = fs.createReadStream(file.path)
	const stream = fs.createWriteStream(path.join('./uploads', file.name))
	reader.pipe(stream)
	console.log('uploading %s -> %s', file.name, stream.path)
})
router.post('/upload', async (ctx, next) => {
	const file = ctx.request.files.file.path
	const image = await cloudinary.uploader.upload(file)
	console.log(image.secure_url) 
	ctx.body = image.secure_url
})
// Entries routes
router.post('/addentry', Entry.addEntry)

export default router
