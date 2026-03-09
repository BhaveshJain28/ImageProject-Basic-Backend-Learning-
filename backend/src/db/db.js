const mongoose=require('mongoose');
require('dotenv').config();

async function connectDB(){
    console.log('Connecting to MongoDB...');
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports=connectDB;