const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use('/public', express.static(path.join(__dirname, '/static')))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/post', (req, res) => {
    console.log(req.body)
    res.send("Successfully send the data!")
})

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})