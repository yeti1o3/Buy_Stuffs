import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  gender:{type:String, required:true},
  sizes: [String],
  colors: [String],
  images: [String],
  thumbnail: { type: String },
  stock: { type: Number, required: true },
  brand: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
