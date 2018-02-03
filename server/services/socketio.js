
import socket from 'socket.io'


export default server => {
	
const io = socket(server)

io.sockets.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('send-message', (msg) => {
      console.log(msg)
    })
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}	
