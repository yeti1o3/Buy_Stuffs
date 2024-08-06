import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useDispatch,useSelector } from "react-redux";
import { setProduct } from "../../feature/product/productSlice";
import { Rating } from "@mui/material";
import { addToCart } from "../../feature/cart/cartSlice";
import '../../styles/ProductDetail.css'

function ProductDetail() {
    const[quantity,setQuantity]=useState('1');
    const {id}=useParams();
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.product).product;
    useEffect(()=>{
        async function fetchProduct(){
            try{
                const res=await axios.get(`https://dummyjson.com/products/${id}`);
                const data=res.data;
                dispatch(setProduct(data));

            }catch(err){
                console.log(err);
            }
        }
        fetchProduct();
    },[])

    function handleClick(){
      if(quantity>0)
        dispatch(addToCart({id:product.id,quantity:+quantity,thumbnail:product.thumbnail,title:product.title,price:product.price}));
    }

  return (
    <div className="ProductDetail">
      <div>
        <img src={product.thumbnail}/>
      </div>
      <div>
        <h2>{product.title}</h2>
        <Rating value={product.rating} readOnly/>
        <span>{product.price}</span>
        <p>{product.description}</p>
      <input type='text' value={quantity} placeholder="1" onChange={(e)=>setQuantity(e.target.value)}/>
      <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail
