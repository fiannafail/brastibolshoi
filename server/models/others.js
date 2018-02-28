import Sequelize from 'sequelize'
import sequelize from '../postgres-connector'
import SequelizeSlugify from 'sequelize-slugify'

const Other = sequelize.define('others', {
	title: Sequelize.STRING,
	thumbnail: Sequelize.STRING,
	content: Sequelize.TEXT,
	slug: Sequelize.STRING
})

const Category = sequelize.define('otherscategories', {
	name: {
		type: Sequelize.STRING
	},
	slug: {
		type: Sequelize.STRING,
		unique: true
	},
	description: Sequelize.TEXT
})

Other.belongsTo(Category, { foreignKey: 'otherscategoriesId' })
Category.hasMany(Other, { foreignKey: 'otherscategoriesId' })

SequelizeSlugify.slugifyModel(Other, {
	source: ['title']
})

export {
	Other,
	Category
}
