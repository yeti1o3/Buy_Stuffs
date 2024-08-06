import {createSlice} from '@reduxjs/toolkit';
 
const initialState={
    cart:[
    ],
    totalAmount:0,
    totalQuantity:0,
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            state.cart.push({id:action.payload.id,
                quantity:action.payload.quantity,
                thumbnail:action.payload.thumbnail,
                title:action.payload.title,
                price:action.payload.price,
            });
            state.totalAmount+=(action.payload.price*action.payload.quantity);
            state.totalQuantity+=(action.payload.quantity);
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter((ele)=>ele.id!==action.payload.id);
            state.totalAmount-=(action.payload.price*action.payload.quantity);
            state.totalQuantity-=(action.payload.quantity);
        },
        modifyCart(state,action){
            state.cart=state.cart.map((ele)=>ele.id===action.payload.id?( {...ele,quantity:action.payload.quantity}):(ele));
            state.totalAmount+=action.payload.priceDiff;//it accept difference in price
            state.totalQuantity+=action.payload.quantityDiff;//it accept difference in qunatity
        }
    }
})
export const{addToCart,removeFromCart,modifyCart}=cartSlice.actions;
export default cartSlice.reducer;