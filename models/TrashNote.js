const mongoose = require('mongoose');

const TrashNoteSchema = new mongoose.Schema({
    title: {type: String, default: "no title"},
    message: {type: String, default: "no message"},
    status: {type: String, default: "trash"},
}, {timestamps: true})

mongoose.models = {};

module.exports =  mongoose.model('TrashNotes', TrashNoteSchema);