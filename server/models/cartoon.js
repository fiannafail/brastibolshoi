import mongoose, { Schema } from 'mongoose'

const ageCategorySchema = new Schema({
	name: String,
	slug: String,
	description: String
})
const tagSchema = new Schema({
	name: { type: String }
})

const cartoonSchema = new Schema({
	title: { type: String },
	slug: { type: String },
	isMultiseries: { type: Boolean },
	thumbnail: { type: String },
	year: { type: Number },
	video: { type: String },
	multiseriesTitle: { type: Schema.Types.ObjectId },
	tags: { type: [Schema.Types.ObjectId], ref: 'Tag' },
	author: { type: String },
	unclear: { type: String },
	description: { type: String },
	category: { type: Schema.Types.ObjectId, ref: 'AgeCategory' }
})

export const Tag = mongoose.model('Tag', tagSchema, 'Tags')
export const Cartoon = mongoose.model('Cartoon', cartoonSchema, 'Cartoons')
export const AgeCategory = mongoose.model('AgeCategory', ageCategorySchema, 'Categories')
