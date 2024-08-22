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