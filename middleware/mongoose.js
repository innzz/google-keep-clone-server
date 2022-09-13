const mongoose = require('mongoose');

const connectDb = handler => async (req,res)=>{
    console.log(`${dbUrl}/google-keep-clone`)
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    // await mongoose.connect(`${process.env.MONGO_URI}/google-keep-clone`);
    await mongoose.connect(`${process.env.MONGO_URI}/google-keep-clone`);
    return handler(req,res)
}


module.exports = connectDb;