const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// https://google-keep-server-deploy.herokuapp.com/
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()


// let jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api',require(path.join(__dirname,'routes/notes.js')));

app.get('/',(req,res)=>{
    res.status(200).send("success")
})

// app.post('/api/addNote',(req,res)=>{
//     console.log(req.body);
//     // console.log(req.body);
//     // if (req.method == 'POST') {
//         // const {title,message} = req.body;
//         // let note = new addNote({title : title, message: message});
//         // await note.save();
//         res.status(200).json({success: "success"})
// })

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})