const fs = require('fs')

fs.mkdir("example", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Folder created successfully!")
    }
})

fs.rmdir("example", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Folder deleted successfully!")
    }
})

fs.writeFile("./example/hello.txt", "Hello World :)", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("File created successfully!")
    }
})

fs.readdir("./example", (err, files) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Files", files)
    }
})