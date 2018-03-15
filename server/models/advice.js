import Sequelize from 'sequelize'
import sequelize from '../postgres-connector'

const Advice = sequelize.define('advice', {
	content: Sequelize.TEXT
})

export default {
	Advice
}
