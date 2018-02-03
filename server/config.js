let MONGO_URI, REDIS_URL

if(process.env.NODE_ENV === 'production') {
	MONGO_URI = 'mongodb://nuxt-mongo:190dce0aaf564d08c344346e8c5ed8b6@dokku-mongo-nuxt-mongo:27017/nuxt-mongo'
	REDIS_URL = 'redis://nuxt-redis:ad26d5d14d28c2a7c31001b935ce2f45377f5d1d121cf9ef7f6a7730ea2647fe@dokku-redis-nuxt-redis:6379'
} else {
	MONGO_URI = 'mongodb://fiannafail:loOhdsdFom5nYCiR@cluster0-shard-00-00-y7wbs.mongodb.net:27017,cluster0-shard-00-01-y7wbs.mongodb.net:27017,cluster0-shard-00-02-y7wbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
	REDIS_URL = 'redis://localhost:6379'
}
const REDIS_KEY = 'DRKlPeBHbgr0FUSs'
const JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8'

export {
	MONGO_URI,
	REDIS_URL,
	JWT_KEY,
	REDIS_KEY
}

