const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use('/public', express.static(path.join(__dirname, '/views')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})