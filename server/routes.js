import Router from 'koa-router'
const debug = require('debug')('app:nuxt')

import User from './controllers/user'
import Cartoon from './controllers/cartoon'

import checkUser from './handlers/checkUser'
import putToken from './jwt'

const router = new Router()

router.post('/user', User.signUp)
router.post('/login', User.signIn)
router.get('/admin', putToken(), checkUser())
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
export default router