import Product from "../models/productModel.js";
export const addproduct=async(req,res)=>{
    try {
        const { name, description, price, category, sizes, colors, stock, brand, images, thumbnail ,gender} = req.body;
    
        const product = new Product({
          name,
          description,
          price,
          category,
          sizes: sizes.split(','),
          colors: colors.split(','),
          images,
          thumbnail,
          stock,
          brand,
          gender,
        });
    
        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
