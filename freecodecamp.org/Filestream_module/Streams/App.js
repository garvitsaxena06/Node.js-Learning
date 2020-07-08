const fs = require('fs')

// fs.writeFile("example.txt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File created successfully!")
//     }
// } )

const readStream = fs.createReadStream("./example.txt", "UTF-8")
const writeStream = fs.createWriteStream("example2.txt")
readStream.on('data', (chunk) => {
    writeStream.write(chunk)
    console.log("content copied in file example2.txt")
})