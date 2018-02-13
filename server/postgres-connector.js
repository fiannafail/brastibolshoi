import Sequalize from 'sequelize'
import { DATABASE_URL } from './config'

const sequelize = new Sequalize(DATABASE_URL, {
	dialect: 'postgres'
})
sequelize.sync()
export default sequelize
