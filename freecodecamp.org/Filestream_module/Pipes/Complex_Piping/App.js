// const fs = require('fs')
// const zlib = require('zlib')
// const gunzip = zlib.createGunzip()

// const readStream = fs.createReadStream('example2.txt.gz')
// const writeStream = fs.createWriteStream('uncompressed.txt')
// readStream.pipe(gunzip).pipe(writeStream)
 const fs = require('fs')
 const zlib = require('zlib')

 const gunzip = zlib.createGunzip()

 const readStream = fs.createReadStream("./compressed.txt.gz")
 const writeStream = fs.createWriteStream("./garvit.txt")
 readStream.pipe(gunzip).pipe(writeStream)