import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("connected to database");
    }catch(err){
        console.log("Unable to connect",err);
    }
}
export default connectDB;