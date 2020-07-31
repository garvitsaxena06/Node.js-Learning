const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/trial.json')
    res.writeHead(200, {'Content-type': 'application/json'}) // , {'Content-type': 'text/html'} , {'Content-type': 'image/jpeg'}
    readStream.pipe(res)
}).listen(3000)
console.log('Listening to port 3000')