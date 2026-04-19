const http = require('http')
const handler = require('./addition')

const server = http.createServer(handler)

server.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000')
})