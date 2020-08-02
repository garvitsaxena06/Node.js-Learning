const Joi = require('joi')

const myArray = ['val1', 'val2', 'val3']

const myObject = {
    info1 : {
        key1 : 'val',
        key2 : 'val2'
    },
    info2 : myArray 
}

const schema1 = Joi.object().keys({
    key1 : Joi.string().trim().required(),
    key2 : Joi.string().trim().length(4).required()
})

const schema2 = Joi.array().items(Joi.string())

const schema = Joi.object().keys({
    info1 : schema1,
    info2 : schema2
})

Joi.validate(myObject, schema, (err, result) => {
    if (err)
        console.log(err)
    else 
        console.log(result)
})