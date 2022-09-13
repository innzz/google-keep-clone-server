const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {type: String, default: "no title"},
    message: {type: String, default: "no message"},
    status: {type: String, default: "normal"},
}, {timestamps: true})

mongoose.models = {};

module.exports =  mongoose.model('Notes', NoteSchema);