const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,
        unique : true,
    },
    Age : {
        type : Number,
        required : true
    }
})
module.exports = Schema = mongoose.model('user', newSchema)