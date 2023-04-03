import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    userInfo : localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    :[],
}


const userInfoSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{

        addUser(state,action){
            const tempInfo = {...action.payload}
            state.shippingInfo = [];
            state.shippingInfo.push(tempInfo);
            localStorage.setItem("userInfo",JSON.stringify(state.userInfo))
        },
        removeUser(state,action){
            // const tempInfo = {...action.payload}
            state.shippingInfo = [];
            // state.shippingInfo.push(tempInfo);
            localStorage.setItem("userInfo",JSON.stringify(state.userInfo))
        },
        

    }
})

export const {addUser} = userInfoSlice.actions;

export default userInfoSlice.reducer;