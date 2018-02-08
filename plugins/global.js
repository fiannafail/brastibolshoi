import io from 'socket.io-client'
const socket = io(`http://${process.env.HOST || 'localhost'}:${process.env.PORT || process.env.DOKKU_NGINX_PORT || 3000}`)

export default socket
