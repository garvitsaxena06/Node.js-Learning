const express = require('express')

const app = express()
const PORT = 3000

app.use('/hello', (req, res, next) => {
    console.log(req.url, req.method)
    next()
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})