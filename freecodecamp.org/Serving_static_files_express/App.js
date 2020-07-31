const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.join(__dirname, 'static')))          //__dirname shows the path of App.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.listen(3000)
console.log("Listening to port 3000!")