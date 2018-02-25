import Sequelize from 'sequelize'
import sequelize from '../postgres-connector'
import SequelizeSlugify from 'sequelize-slugify'

const Audio = sequelize.define('audio', {
	title: Sequelize.STRING,
	thumbnail: Sequelize.STRING,
	audio: Sequelize.STRING,
	slug: Sequelize.STRING
})

const Category = sequelize.define('audiocategories', {
	name: {
		type: Sequelize.STRING
	},
	slug: {
		type: Sequelize.STRING,
		unique: true
	},
	description: Sequelize.TEXT
})

Audio.belongsTo(Category, { foreignKey: 'audiocategoriesId' })
Category.hasMany(Audio, { foreignKey: 'audiocategoriesId' })

SequelizeSlugify.slugifyModel(Category, {
	source: ['name']
})
SequelizeSlugify.slugifyModel(Audio, {
	source: ['title']
})

export {
	Audio,
	Category
}
