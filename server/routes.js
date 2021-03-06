import Router from 'koa-router'
import sequelize from './postgres-connector'
const debug = require('debug')('app:nuxt')
const fs = require('fs')
const path = require('path')

var cloudinary = require('cloudinary')

cloudinary.config({
	cloud_name: 'rastibolshoi',
	api_key: '374329698237239',
	api_secret: 'Kax6e6xy_FakEfMUc61P_3XUS_I'
})

import Advice from './controllers/advice'
import User from './controllers/user'
import Cartoon from './controllers/cartoon'

import Audio from './controllers/audio'
import Others from './controllers/others'

import checkUser from './handlers/checkUser'
import { Other } from './models/others'

const CartoonModel = require('./models/cartoon')
const AudioModel = require('./models/audio')
const OthersModel = require('./models/others')

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

router.get('/api/all/items', async (ctx, next) => {
	try {
		console.log(CartoonModel)
		const cartoons = await CartoonModel.Cartoon.findAll({
			order: [['createdAt', 'DESC']],
			attributes: ['thumbnail', 'title', 'slug', 'createdAt'],
			include: [CartoonModel.Categories]
		})
		const audios = await AudioModel.Audio.findAll({
			attributes: ['thumbnail', 'title', 'slug', 'createdAt'],
			include: [{
				model: AudioModel.Category
			}]
		})
		const others = await OthersModel.Other.findAll({
			attributes: ['thumbnail', 'title', 'slug', 'createdAt'],
			include: [OthersModel.Category]
		})
		const arr = [
			...cartoons,
			...audios,
			...others
		]
		console.log(arr)
		arr.sort(function compare(a, b) {
			var dateA = new Date(a.createdAt)
			var dateB = new Date(b.createdAt)
			return dateB - dateA
		})
		ctx.body = arr
	} catch (e) {
		console.log(e)
	}
})

router.post('/api/advices/add', Advice.addAdvice)
router.get('/api/advices', Advice.getAdvices)
router.patch('/api/advices/edit', Advice.updateAdvice)

router.post('/api/others/addcategory', Others.addCategory)
router.get('/api/others/getcategories', Others.getCategories)
router.post('/api/others/addother', Others.addOther)
router.get('/api/others/getothers', Others.getOthers)
router.get('/api/others/:slug', Others.getOther)
router.get('/api/others/getbycategory/:category', Others.getOthersByCategory)
router.patch('/api/others/updateother', Others.updateOther)

router.get('/api/audios/category/:category', Audio.getByCategory)
router.post('/addaudiocat', Audio.addCategory)
router.get('/api/audios/getcategories', Audio.getCategories)
router.post('/api/audios/addaudio', Audio.addAudio)
router.get('/api/audios/getaudios', Audio.getAudios)

router.get('/api/cartoons/gettag/:name', Cartoon.getTag)
router.post('/api/cartoons/settag', Cartoon.setTag)
router.get('/api/cartoons/multiseries/:id', Cartoon.multiseries)

router.get('/api/cartoons/category/:slug', Cartoon.getCategoryCartoons)
//	router.get('/cartoon/:slug', Cartoon.getOne)

router.get('/api/cartoons/categories', Cartoon.getCategories)
router.get('/api/cartoons/page/:id/:category', Cartoon.getMoreCartoons)
router.get('/api/cartoons', Cartoon.getCartoons)
router.patch('/api/cartoons/updatecat/:id', Cartoon.updateCategory)
router.get('/api/gettagbyname/:category/:tag', Cartoon.getTagByName)
router.get('/api/getcartoonbyslug/:cartoon', Cartoon.getCartoonBySlug)
router.get('/api/getcartoonsbytag/:tag', Cartoon.getCartoonsByTag)
router.get('/api/cartoons/tags', Cartoon.getTags)
router.post('/settag', Cartoon.setTag)
router.post('/add', Cartoon.add)
router.post('/addcategory', Cartoon.addCategory)
router.get('/api/cartoons/multiseries', Cartoon.getMultiseries)
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
