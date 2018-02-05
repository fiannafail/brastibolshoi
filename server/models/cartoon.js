import mongoose, { Schema } from 'mongoose'

const ageCategorySchema = new Schema({
	name: String,
	slug: String,
	description: String,
})

const cartoonSchema = new Schema({
	title: { type: String },
	slug: { type: String },
	thumb: { type: String },
	age: { type: String },
	year: { type: Number },
	video: { type: String },
	tags: { type: Array },
	author: { type: String },
	unclear: { type: String },
	category: { type: Schema.Types.ObjectId, ref: 'AgeCategory' }
})

export const Cartoon = mongoose.model('Cartoon', cartoonSchema, 'Cartoons')
export const AgeCategory = mongoose.model('AgeCategory', ageCategorySchema, 'Categories')