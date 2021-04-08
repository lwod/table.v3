const express = require('express')
const app = express()
const port = 4000;

const http = require('http')
const server = http.createServer(app)

const io = require('socket.io')(server)
io.on('connection', socket => {
	
	socket.on('message', ({name, message})=>{
		io.emit('message', {name, message})
	})
	
})

server.listen(port, ()=>{
	console.log('server started')
})
