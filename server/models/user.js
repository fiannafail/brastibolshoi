import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator'

mongoose.plugin(uniqueValidator)

const userSchema = new Schema({
	username: { type: String, unique: true, required: true },
	role: { type: String, default: 'user', required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true }
})

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next()
	}
	const salt = bcrypt.genSaltSync(10)

	this.password = bcrypt.hashSync(this.password, salt)
	next()
})

userSchema.methods.authenticate = function (password) {
	return bcrypt.compareSync(password, this.passwordHash)
}
userSchema.statics.authenticate = function (username, password, done) {
	console.log({ username: username, password: password })
	this.findOne({ username: username }, (err, user) => {
		if (err) {
			console.log('Error to check', err)
			done(err)
		} else if (user) {
			console.log('Success!', user)
			done(null, user)
		} else {
			console.log('Something else')
			done(null, false)
		}
	})
}

export default mongoose.model('user', userSchema);