import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:{
        id:null,
        name:'',
        profilePic:''
    },
    isLoggedIn:false
};

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login(state,action){
            state.user=action.payload;
            state.isLoggedIn=true;
        },
        logout(state){
            state.user=initialState.user;
            state.isLoggedIn=false;
        },
        updateProfilePic(state,action){
            state.user.profilePic=action.payload;
        }
    }
});
export const{login, logout, updateProfilePic}=userSlice.actions;
export default userSlice.reducer;