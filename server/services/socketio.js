import socket from 'socket.io'
import redis from 'redis'
import slugify from 'slug-generator'
import { redisClient, getAsync } from '../handlers/redis'

export default (server) => {
	const io = socket(server)

	io.sockets.on('connection', (socket) => {
		console.log('a user connected')
		socket.on('setTag', async (msg) => {
			console.log(msg.name, msg.description + ', ' + slugify(msg.name) + ', ' + msg.name)
			const tag = await redisClient.set(slugify(msg.name), msg.description + ', ' + msg.name, redis.print)
			console.log(tag)
		})
		socket.on('getTag', async (msg) => {
			console.log('MESSAGE', msg)
			const tag = await getAsync(msg)
			io.emit('tag', tag)
		})
		socket.on('chat message', function(msg) {
			io.emit('chat message', msg)
		})
		socket.on('disconnect', () => {
			console.log('user disconnected')
		})
	})
}

