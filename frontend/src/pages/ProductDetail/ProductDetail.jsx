import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router"
import { useDispatch,useSelector } from "react-redux";
import { setProduct } from "../../feature/product/productSlice";
import { Rating } from "@mui/material";

function ProductDetail() {
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
  return (
    <div>
      <div>
        <img src={product.thumbnail}/>
      </div>
      <div>
        <h2>{product.title}</h2>
        <Rating value={product.rating} readOnly/>
        <span>{product.price}</span>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
