import mongoose, { Schema } from 'mongoose'

const entrySchema = new Schema({
	title: { type: String },
	thumbnail: { type: String },
	category: { type: String },
	content: { type: String },
	slug: { type: String }
})

export const Entry = mongoose.model('Entry', entrySchema, 'Entries')
