const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://inzamam:zE7zAH8CUD4KzRNw@cluster0.fen3e0i.mongodb.net/google-keep-clone?retryWrites=true&w=majority&wtimeoutMS=5000"

const connectDb = handler => async (req,res)=>{
    console.log(`${dbUrl}/google-keep-clone`)
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    // await mongoose.connect(`${process.env.MONGO_URI}/google-keep-clone`);
    await mongoose.connect(`${dbUrl}/google-keep-clone`);
    return handler(req,res)
}


module.exports = connectDb;