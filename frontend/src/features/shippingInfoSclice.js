import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    shippingInfo : localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    :[],
}


const shippingInfoSlice = createSlice({
    name:"shipinfo",
    initialState,
    reducers:{

        addInfo(state,action){
            const tempInfo = {...action.payload}
            state.shippingInfo = [];
            state.shippingInfo.push(tempInfo);
            localStorage.setItem("shippingInfo",JSON.stringify(state.shippingInfo))
        },
        clearInfo(state,action){
            state.shippingInfo = [];
            localStorage.setItem("shippingInfo",JSON.stringify(state.shippingInfo))
        }

    }
})

export const {addInfo,clearInfo} = shippingInfoSlice.actions;

export default shippingInfoSlice.reducer;