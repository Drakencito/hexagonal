import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/upCare");
        console.log("db is connected")
    }catch(error){
        console.log(error);
    }
};

