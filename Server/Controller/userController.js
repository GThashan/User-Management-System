import { User } from "../model/User.js";

export const  createUser =async(req,res)=>{
    try {
        const {username, email, NIC,Phone,position} = req.body;

        const exiteUser = await User.findOne({email});
        if(exiteUser){
            return res.json({status:false,message:"This user is already recorded"});
        }
    if(!(email && username && NIC && Phone && position)){
        return res.json({status:false,message:"all feild are required"});
    };
    
    const newUser = new User({
        username,
        email,
        NIC,
        Phone,
        position
    });

    newUser.save();
    return res.json({status:true,message:"user registed in database"});
    } catch (error) {
        return res.json({status:false,message:"Internal error"});
    }
}

export const getUser = async(req,res)=>{
    try {
        const users = await User.find();
        if(!users){
            return res.json({status:false,message:"Users are not in the database"});
        }
        return res.json({status:true,users});
    } catch (error) {
        return res.json({status:false,message:"Internal server error"});
    }
}