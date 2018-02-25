let MONGO_URI, REDIS_URL, DATABASE_URL

if (process.env.NODE_ENV === 'production') {
	MONGO_URI = process.env.MONGO_URL
	REDIS_URL = process.env.REDIS_URL
	DATABASE_URL = process.env.DATABASE_URL
} else {
	MONGO_URI = 'mongodb://fiannafail:loOhdsdFom5nYCiR@cluster0-shard-00-00-y7wbs.mongodb.net:27017,cluster0-shard-00-01-y7wbs.mongodb.net:27017,cluster0-shard-00-02-y7wbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
	REDIS_URL = 'redis://localhost:6379'
	DATABASE_URL = 'postgres://postgres:6354825107@127.0.0.1:5432/postgres'
}
const REDIS_KEY = 'DRKlPeBHbgr0FUSs'
const JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8'

export {
	MONGO_URI,
	REDIS_URL,
	JWT_KEY,
	REDIS_KEY,
	DATABASE_URL
}

