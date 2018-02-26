import Sequelize from 'sequelize'
import SequelizeSlugify from 'sequelize-slugify'
import sequelize from '../postgres-connector'

const Cartoon = sequelize.define('cartoon', {
	cartoonId: { 
		allowNull: false,
		primaryKey: true,
		type: Sequelize.STRING
	},
	slug: {
		type: Sequelize.STRING,
		unique: true
	},
	title: Sequelize.STRING,
	description: Sequelize.TEXT,
	unclear: Sequelize.TEXT,
	video: Sequelize.STRING,
	year: Sequelize.INTEGER,
	thumbnail: Sequelize.STRING,
	author: Sequelize.STRING,
	isMultiseries: Sequelize.BOOLEAN,
	parentTitleId: Sequelize.STRING
})

const Tag = sequelize.define('tags', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING
	}
})

const Categories = sequelize.define('categories', {
	categoriesId: { 
		primaryKey: true,
		autoIncrement: true,
		type: Sequelize.INTEGER
	},
	name: {
		type: Sequelize.STRING
	},
	slug: {
		type: Sequelize.STRING,
		unique: true
	},
	description: Sequelize.TEXT
})

var CartoonTags = sequelize.define('cartoontags', {
	id : {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	tag_id: {
		type: Sequelize.INTEGER,
		unique: 'item_tag_taggable'
	},
	taggable: {
		type: Sequelize.STRING,
		unique: 'item_tag_taggable'
	},
	taggable_id: {
		type: Sequelize.INTEGER,
		unique: 'item_tag_taggable',
		references: null
	}
})

Cartoon.belongsTo(Categories, { foreignKey: 'categoriesId' })
Categories.hasMany(Cartoon, { foreignKey: 'categoriesId' })

Cartoon.belongsToMany(Tag, {
	through: {
		model: CartoonTags,
		unique: false,
		scope: {
			taggable: 'cartoon'
		}
	},
	foreignKey: 'taggable_id',
	constraints: false
})
Tag.belongsToMany(Cartoon, { 
	through: {
		model: CartoonTags,
		unique: false
	},
	foreignKey: 'tag_id',
	constraints: false
})
SequelizeSlugify.slugifyModel(Categories, {
	source: ['name']
})
SequelizeSlugify.slugifyModel(Cartoon, {
	source: ['title']
})
export {
	Cartoon,
	Tag,
	CartoonTags,
	Categories
}
