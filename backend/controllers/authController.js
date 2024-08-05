import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js";
export const register=async(req,res)=>{
    const{name,email,password,confirmPassword,gender}=req.body;
    if(password!=confirmPassword){
        return res.status(400).json({error:"Password dosn't match"})
    }
    const userDoc=await User.findOne({email:email});
    if(userDoc)
    {
       return res.status(400).json({error:"user already exist"});
    }
    try{
        const salt=bcrypt.genSaltSync(10);
    const hashedPassword=bcrypt.hashSync(password,salt);
    
    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${name}`;
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${name}`;

    const newUser=new User({
        name,
        email,
        password:hashedPassword,
        gender,
        profilePic:gender==="male"?boyProfilePic:girlProfilePic
    })
    if(newUser){
        await newUser.save();
        await generateToken(newUser._id,res);
        
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            profilePic:newUser.profilePic,
        })
    }else{
        return res.status(400).json({error:"Invalid user data"});
    }
    
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Unable to create user"})
    }

}

export const login=async(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password)
    {
        return res.status(400).json({error:"All field required"})
    }
    try{
        const userDoc=await User.findOne({email:email});
    const iscorrect=await bcrypt.compareSync(password,userDoc.password);
    if(iscorrect)
    {
        await generateToken(userDoc._id,res);
        res.status(200).json({
            _id:userDoc._id,
            name:userDoc.name,
            profilePic:userDoc.profilePic,
        })
    }else{
        return res.status(400).json({error:"Wrong credential"});
    }
    }catch(err){
        console.log(err);
        res.json(500).status({error:"Internal server error"})
    }
}