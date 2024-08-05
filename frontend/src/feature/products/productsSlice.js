import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    total:'',
    skip:'',
    limit:'',
}

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts(state,action){
            state.products=action.payload.products;
            state.total=action.payload.total;
            state.limit=action.payload.limit;
            state.skip=action.payload.skip;
        }
    }
});
export const {setProducts}=productSlice.actions;
export default productSlice.reducer;