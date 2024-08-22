import { useEffect } from "react"
import {useSelector} from 'react-redux'
import { Grid } from "@mui/material";
import Product from "../../component/Product/Product";
import '../../styles/Home.css'
import axios from 'axios'
import { Link } from "react-router-dom";
 function Home() {
    const data=useSelector((state)=>state.products);
    const products=data.products;
    useEffect(()=>{
     const fetchData=async()=>{
      try{
        const res=await axios.get('/api/product/products');
        if(res){
          console.log(res);
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
            <Link to={`productdetail/${product.id}`}>
            <Product key={product.id} product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
  )
}

export default Home
