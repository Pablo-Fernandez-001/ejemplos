// call db connection ->  const db = require('./dbconnection');

const projectSchema = new Schema({
    // users
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    id:{
        type: Number,
        required: true,
        unique: true // pk
    }

});