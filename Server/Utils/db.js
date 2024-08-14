import mongoose from "mongoose";

export const dbConnect = async()=>{
    try {
     await  mongoose.connect("mongodb+srv://employee:employee@cluster0.hv5fxo7.mongodb.net/");
            console.log("mogodb connected");
        
    } catch (error) {
        console.log(error);
    }
}

