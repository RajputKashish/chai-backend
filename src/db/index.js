import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
import express from "express";
const app = express();
const connectDB=(async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/$
        {DB_NAME}`)
        app.on("error",()=>{
            console.log("Error:",error);
            console.log(`connected ${connectionInstance.connection.host}`);
        })
        app.listen(process.env.PORT,()=>{
            console.log("App is listened on 8000");
        })
    }catch(error){
        console.error("Mongo db ERROR:",error);
        process.exit(1);
         
    }
})
export default connectDB;