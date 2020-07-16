const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/trial.json')
    res.writeHead(200, {'Content-type': 'application/json'})
    readStream.pipe(res)
}).listen(3000)
console.log('Listening to post 3000')