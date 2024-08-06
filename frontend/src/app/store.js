import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/user/userSlice';
import productsReducer from '../feature/products/productsSlice';
import productReducer from '../feature/product/productSlice';
import cartReducer from '../feature/cart/cartSlice'
const store=configureStore({
    reducer:{
        user:userReducer,
        products:productsReducer,
        product:productReducer,
        cart:cartReducer,
    }
});

export default store;