const fs = require('fs')

fs.mkdir("example", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Folder created!")
    }
})

fs.writeFile("./example/file.txt", "This is the data!", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("File created!")
    }  
})

fs.unlink("./example/file.txt", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        fs.rmdir("example", (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Folder deleted!")
            }
        })
    }
})

fs.readdir("example", (err, files) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(files)
        for (let file of files) {
            fs.unlink(`./example/${ file }`, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(`Successfully deleted file! ${ file }`)
                }
            })
        }
    }
})