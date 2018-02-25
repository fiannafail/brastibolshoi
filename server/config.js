let REDIS_URL, DATABASE_URL

if (process.env.NODE_ENV === 'production') {
	REDIS_URL = process.env.REDIS_URL
	DATABASE_URL = process.env.DATABASE_URL
} else {
	REDIS_URL = 'redis://localhost:6379'
	DATABASE_URL = 'postgres://postgres:6354825107@127.0.0.1:5432/postgres'
}
const REDIS_KEY = 'DRKlPeBHbgr0FUSs'
const JWT_KEY = 'dFTvn3RxVsXE8ZJafmcQSi7fSAL4L9i8'

export {
	REDIS_URL,
	JWT_KEY,
	REDIS_KEY,
	DATABASE_URL
}

