const mongoose = require('mongoose')
const validator = require ('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        validate (value){
            if (!validator.isEmail(value)){
                throw new Error('ponga un email valido jeje')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.includes('password')){
                throw new Error('la clave no puede contener "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0 ){
                throw new Error('usted no puede tener la edad negativa al menos que sea diosito')
            }
        }
    }
})

module.exports = User