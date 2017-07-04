var express = require('express')
var server = express()

server.use(express.static('app'))
server.use('/bower_components', express.static('bower_components'))


server.get('*', function (req, res) {
  res.sendFile(__dirname + '/app/index.html')
})

server.listen(3000)
