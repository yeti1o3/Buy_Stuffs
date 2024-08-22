import { useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { Grid } from "@mui/material";
import Product from "../../component/Product/Product";
import '../../styles/Home.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import { setProducts } from "../../feature/products/productsSlice";

 function Home() {
    const data=useSelector((state)=>state.products);
    const dispatch=useDispatch();
    const products=data.products;
    useEffect(()=>{
     const fetchData=async()=>{
      try{
        const res=await axios.get('/api/product/products');
        if(res){
          console.log(res);
          dispatch(setProducts({products:res.data}));
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
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Link to={`productdetail/${product._id}`}>
            <Product key={product.id} product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
  )
}

export default Home
