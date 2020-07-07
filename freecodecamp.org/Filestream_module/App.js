const fs = require('fs')

fs.writeFile("example.txt", "This is an example!", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("File created successfully!")
        fs.readFile("example.txt", "UTF-8", (err, file) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(file)
            }
        })
    }
})

fs.rename("example.txt", "myFile.txt", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("File renamed successfully!")
    }
})

fs.appendFile("myFile.txt", " \nThis is the data to be append!", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Content appended successfully!")
    }
})

fs.unlink("myFile.txt", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("File Deleted!")
    }
})

