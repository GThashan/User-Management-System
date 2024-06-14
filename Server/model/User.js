import mongoose, { mongo } from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    NIC:{type:String,unique:true,require:true},
    Phone:{type:String},
    position:{type:String}
   
},{timestamps:true});


const userModel = mongoose.model("User",userSchema);
export {userModel as User};