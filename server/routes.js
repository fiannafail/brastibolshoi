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

import Audio from './controllers/audio'
import Others from './controllers/others'

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

router.post('/api/others/addcategory', Others.addCategory)
router.get('/api/others/getcategories', Others.getCategories)
router.post('/api/others/addother', Others.addOther)
router.get('/api/others/getothers', Others.getOthers)
router.get('/api/others/:slug', Others.getOther)

router.get('/api/audios/category/:category', Audio.getByCategory)
router.post('/addaudiocat', Audio.addCategory)
router.get('/api/audios/getcategories', Audio.getCategories)
router.post('/api/audios/addaudio', Audio.addAudio)
router.get('/api/audios/getaudios', Audio.getAudios)

router.get('/api/cartoons/gettag/:name', Cartoon.getTag)
router.post('/api/cartoons/settag', Cartoon.setTag)

router.get('/api/cartoons/:slug', Cartoon.getCategoryCartoons)
//	router.get('/cartoon/:slug', Cartoon.getOne)

router.get('/getcategories', Cartoon.getCategories)
router.get('/api/cartoons/page/:id/:category', Cartoon.getMoreCartoons)
router.get('/api/cartoons', Cartoon.getCartoons)
router.patch('/api/cartoons/updatecat/:id', Cartoon.updateCategory)
router.get('/api/gettagbyname/:category/:tag', Cartoon.getTagByName)
router.get('/api/getcartoonbyslug/:cartoon', Cartoon.getCartoonBySlug)
router.get('/api/getcartoonsbytag/:tag', Cartoon.getCartoonsByTag)
router.get('/gettags', Cartoon.getTags)
router.post('/settag', Cartoon.setTag)
router.post('/add', Cartoon.add)
router.post('/addcategory', Cartoon.addCategory)
router.get('/getmultiseries', Cartoon.getMultiseries)
router.post('/up', async (ctx, next) => {
	const file = ctx.request.files.file
	const reader = fs.createReadStream(file.path)
	const stream = fs.createWriteStream(path.join('./uploads', file.name))
	reader.pipe(stream)
	console.log('uploading %s -> %s', file.name, stream.path)
	ctx.body = stream.path
})
router.post('/upload', async (ctx, next) => {
	try {
		const file = ctx.request.files.file.path
		const image = await cloudinary.uploader.upload(file)
		console.log(image.secure_url) 
		ctx.body = image.secure_url
	} catch (e) {
		console.log(e)
	}
})

export default router
