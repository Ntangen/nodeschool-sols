var net = require('net')

function fill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + fill(d.getMonth() + 1) + '-'
    + fill(d.getDate()) + ' '
    + fill(d.getHours()) + ':'
    + fill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
