const mongoose = require('mongoose');

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect(`mongodb://localhost:27017/google-keep-clone`);
    // await mongoose.connect(`${process.env.MONGO_URI}/google-keep-clone`);
    return handler(req,res)
}


module.exports = connectDb;