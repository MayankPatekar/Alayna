import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import shippingInfoReducer from "../features/shippingInfoSclice";
import wishlistReducer from "../features/wishlistSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        shipinfo: shippingInfoReducer,
        wishList : wishlistReducer
    },
})