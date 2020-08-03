const express = require('express')
const path = require('path')
const Joi = require('joi')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use('/public', express.static(path.join(__dirname, '/static')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/post', (req, res) => {
    console.log(req.body)
    const schema = Joi.object().keys({
        email : Joi.string().email().required(),
        password : Joi.string().min(5).max(10)
    })
    
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err)
            res.send("An error occured!")
        }
        else {
            console.log(result)
            res.send("Successfully posted data!")
        }
    })
})

app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Listening to port ${ PORT }`)
    }
})