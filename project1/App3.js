
const fs = require('fs')

// sync call
let files = fs.readdirSync('./')

console.log('Files', files)

// async call
fs.readdir('./', (err, files) => {
    if (err) console.log('Error', err)
    else console.log('Files', files)
})