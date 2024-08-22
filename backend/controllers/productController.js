import Product from "../models/productModel.js";

export const products=async(req,res)=>{
    try{
        const data=await Product.find();
        if(data){
            res.status(200).json(data);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"unable to fatch products"});
    }
}
export const product=async(req,res)=>{
        const {id}= req.params;
        if(!id){
            res.status(400).json('No product id provided');
        }
    try{
        const data=Product.findOne({_id:id});
        if(data){
            res.status(200).json(data);
        }
    }catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}