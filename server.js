const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


const http = require('http')
const server = http.createServer(app)

app.use(cors())
app.use(express.static(path.join(__dirname,'build')))
app.get('/', async (req,res)=>{
	res.sendFile(`${__dirname}/build/index.html`)
})


const io = require('socket.io')(server)
io.on('connection', socket => {
	
	socket.on('message', ({name, message})=>{
		io.emit('message', {name, message})
	})
	
})

server.listen(port, ()=>{
	console.log('server started')
})
