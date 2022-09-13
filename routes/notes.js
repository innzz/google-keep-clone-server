const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const TrashNote = require('../models/TrashNote');
const connectDb = require('../middleware/mongoose');

const addNotehandler = async (req,res)=>{
    // console.log(req.body);
    if (req.method == 'POST') {
        const {title,message,status} = req.body;
        let note = new Note({title : title, message: message,status: status});
        await note.save();
        res.status(200).json({status: "success"})
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const getNoteshandler = async (req,res)=>{
    // console.log(req.body);
    if (req.method == 'GET') {
        let notes = await Note.find({});
        // console.log(notes)
        res.status(200).json({notes: notes});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const getTrashNoteshandler = async (req,res)=>{
    // console.log(req.body);
    if (req.method == 'GET') {
        let notes = await TrashNote.find({});
        // console.log(notes)
        res.status(200).json({notes: notes});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const deleteNoteshandler = async (req,res)=>{
    // console.log(req.body);
    if (req.method == 'DELETE') {
        let notes = await Note.findByIdAndDelete({_id: req.body._id});
        // console.log(notes)
        let noteNote = new TrashNote({title: notes.title,message: notes.message,status: "trash"});
        await noteNote.save();
        res.status(200).json({status: "success"});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const deletePermanentNoteshandler = async (req,res)=>{
    // console.log(req.body);
    if (req.method == 'DELETE') {
        let notes = await TrashNote.findByIdAndDelete({_id: req.body._id});
        // console.log(notes)
        res.status(200).json({status: "success"});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const updateNotesStatushandler = async (req,res)=>{
    if (req.method == 'POST') {
        let notes = await Note.findByIdAndUpdate({_id: req.body._id},{status: req.body.status});
        res.status(200).json({status: "success"});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const updateNoteshandler = async (req,res)=>{
    const {title,message,status} = req.body;
    // console.log(req.body);
    if (req.method == 'POST') {
        let notes = await Note.findByIdAndUpdate({_id: req.body._id},{title: title, message: message,status });
        res.status(200).json({status: "success"});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

const restoreNoteshandler = async (req,res)=>{
    const {title,message,status} = req.body;
    // console.log(req.body);
    if (req.method == 'POST') {
        let notes = await TrashNote.findByIdAndDelete({_id: req.body._id});
        let note = new Note({title: title, message: message,status });
        await note.save();
        res.status(200).json({status: "success"});
    }
    else{
        res.status(400).json({error: "error"})
    }
}

router.post('/addNotes',connectDb(addNotehandler));
router.get('/getNotes',connectDb(getNoteshandler));
router.get('/getTrashNotes',connectDb(getTrashNoteshandler));
router.delete('/deleteNotes',connectDb(deleteNoteshandler));
router.delete('/deletePermanentNotes',connectDb(deletePermanentNoteshandler));
router.post('/updateNotesStatus',connectDb(updateNotesStatushandler));
router.post('/updateNotes',connectDb(updateNoteshandler));
router.post('/restoreNotes',connectDb(restoreNoteshandler));


module.exports = router;