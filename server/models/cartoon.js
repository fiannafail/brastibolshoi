import mongoose, { Schema } from 'mongoose'

const cartoonSchema = new Schema({
	title: { type: String },
	slug: { type: String },
	thumb: { type: String },
	age: { type: String },
	year: { type: Number },
	video: { type: String },
	tags: { type: Array },
	author: { type: String },
	unclear: { type: String }

})

export default mongoose.model('cartoon', cartoonSchema);