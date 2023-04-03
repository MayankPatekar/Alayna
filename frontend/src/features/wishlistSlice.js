import {createSlice} from "@reduxjs/toolkit"
// import { toast } from "react-toastify";


const initialState={
    wishlist : localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    :[],
}


const wishListSlice = createSlice({
    name:"wishList",
    initialState,
    reducers:{
        addProduct(state,action){
            const tempProduct = {...action.payload}
            state.wishlist.push(tempProduct);
            localStorage.setItem("wishList",JSON.stringify(state.wishlist))
        },
        removeItem(state,action){
            const tempProduct = state.wishlist.filter(
                (item)=>{
                    if(item._id === action.payload._id){
                        return false
                    }
                    return true
                }
            )
            
            state.wishlist = tempProduct;
            localStorage.setItem("wishList",JSON.stringify(state.wishlist))        

        },
        removeAllItem(state,action){
           state.wishlist = [];
           localStorage.setItem("wishList",JSON.stringify(state.wishlist)) 
        }
    }
})

export const {addProduct,removeItem,removeAllItem} = wishListSlice.actions;

export default wishListSlice.reducer;