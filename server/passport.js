import passport from 'koa-passport'
const LocalStrategy = require('passport-local');
import User from './models/user'

const debug = require('debug')('app:nuxt')

function configure(passport) {
	const strategyFunc = function (username, password, done) {
		User.authenticate(username, password, function (err, user) {
			if (err) {
				console.log(err)
				done(err)
			} else if (user) {
				console.log('Local - Success')
				done(null, user)
			} else {
				console.log(err)
				done(null, false)
			}
		})
	}
	passport.use(new LocalStrategy(strategyFunc))

	passport.serializeUser(function (user, done) {
		done(null, user.id)
	})
	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user)
		})
	})
}

module.exports = {
	configure
}
