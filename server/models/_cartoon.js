import Sequelize from 'sequelize'
import sequelize from '../postgres-connector'

const Cartoon = sequelize.define('cartoon', {
	cartoonId: { 
		allowNull: false,
		primaryKey: true,
		type: Sequelize.STRING
	},
	title: Sequelize.STRING,
	description: Sequelize.TEXT,
	unclear: Sequelize.TEXT,
	video: Sequelize.STRING,
	year: Sequelize.INTEGER,
	slug: Sequelize.STRING,
	thumbnail: Sequelize.STRING,
	author: Sequelize.STRING,
	isMultiseries: Sequelize.BOOLEAN,
	parentTitleId: Sequelize.STRING
})

const Tag = sequelize.define('tags', {
	id : {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING
	}
})

const Categories = sequelize.define('categories', {
	name: {
		type: Sequelize.STRING,
		primaryKey: true
	}
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

Cartoon.belongsTo(Categories)
Categories.hasMany(Cartoon)

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

export {
	Cartoon,
	Tag,
	CartoonTags,
	Categories
}
