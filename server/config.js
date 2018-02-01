let REDIS_KEY, JWT_KEY, MONGO_URI
if (process.env.NODE_ENV === 'production') {
	MONGO_URI = 'mongodb://admin:irishlibertian28@46.101.221.53:27017'
} else {
	MONGO_URI = 'mongodb://fiannafail:loOhdsdFom5nYCiR@cluster0-shard-00-00-y7wbs.mongodb.net:27017,cluster0-shard-00-01-y7wbs.mongodb.net:27017,cluster0-shard-00-02-y7wbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
	JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8'
	REDIS_KEY = 'DRKlPeBHbgr0FUSs'
}
export {
	MONGO_URI,
	JWT_KEY,
	REDIS_KEY
}

