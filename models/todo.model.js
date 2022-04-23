const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const TodoSchema = new Schema({

    name: { type : String , required: true} // name >> string,  not null

}, {
    timestamps: true
});

module.exports =  mongoose.model('todo', TodoSchema)