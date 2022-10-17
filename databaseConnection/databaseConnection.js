const mongoose = require('mongoose')

const databaseConnection = (link)=>{
    mongoose.connect(link);
    console.log('Datbase is connected')
}

module.exports = databaseConnection