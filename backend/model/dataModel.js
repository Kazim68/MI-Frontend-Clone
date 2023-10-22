const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    data : {
        type : Object
    }
})

module.exports =  mongoose.model('Data', dataSchema)