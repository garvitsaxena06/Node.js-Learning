const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000

app.use('/public', express.static(path.join(__dirname, '/static')))        //__dirname shows the path of App.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})
