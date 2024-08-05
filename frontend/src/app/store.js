import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/user/userSlice';
import productsReducer from '../feature/products/productsSlice';
import productReducer from '../feature/product/productSlice'
const store=configureStore({
    reducer:{
        user:userReducer,
        products:productsReducer,
        product:productReducer,
    }
});

export default store;