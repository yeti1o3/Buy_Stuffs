import { useEffect } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { Grid } from "@mui/material";
import { setProducts } from "../../feature/products/productsSlice";
import Product from "../../component/Product/Product";
import '../../styles/Home.css'
import axios from 'axios'
import { Link } from "react-router-dom";
 function Home() {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.products);
    const products=data.products;
    console.log(data);
    useEffect(()=>{
     const fetchData=async()=>{
      try{
        const res=await axios.get('https://dummyjson.com/products');
        if(res){
          const data=res.data;
          dispatch(setProducts(data));
        }
      } catch(err){
        console.log(err);
      }
     }
     fetchData();
    },[])
  return (
    <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3}>
            <Link to={`productdetail/${product.id}`}>
            <Product product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
  )
}

export default Home
