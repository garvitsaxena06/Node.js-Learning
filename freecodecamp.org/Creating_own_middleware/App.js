const express = require('express')

const app = express()
const PORT = 3000

app.use((req, res, next) => {
    req.banana = 'banana'
    next()
})

app.get('/', (req, res) => {
    console.log(req.banana)
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