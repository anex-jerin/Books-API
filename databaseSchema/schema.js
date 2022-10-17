const mongoose = require('mongoose')
const schema = mongoose.Schema

const Books = new schema({
    name:{
        required:true,
        type:String
    },
    author:{
        default:'Annonymus',
        type:String
    },
    price:{
        default:0,
        type:Number
    },
    rating:{
        default:3.5,
        type:Number,
        min:[1,'Minium Rating is 1'],
        max:[5,'Maximum Rating is 5']
    }
})

module.exports = mongoose.model('Book',Books)