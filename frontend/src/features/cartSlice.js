import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState ={
    cartItems:localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) 
    :[],
    cartTotalQuantity:0,
    cartTotalPoints:0,
    cartTotalAmount:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){

            // const filterData = state.cartItems.filter(
            //     (item) => item._id === action.payload._id
            // )

            // const itemIndex = filterData.findIndex(
            //     (item)=> item.SelectedSize === action.payload.SelectedSize
            // );

            const itemIndex = state.cartItems.findIndex(
                (cartItem) =>{
                    if(cartItem._id === action.payload._id )
                    {
                        if(cartItem.SelectedSize === action.payload.SelectedSize){

                            return true
                        }

                    }
                    return false
                }
            )
            
            if(itemIndex >=0){
                if(state.cartItems[itemIndex].SelectedSize === action.payload.SelectedSize){
                    if(state.cartItems[itemIndex].cartQuantity < 10){

                        state.cartItems[itemIndex].cartQuantity +=1;
                    }else{
                        toast.info("You can add only 10 quantity per product",{autoClose:800})
                    }
                    // toast.info(`increased ${state.cartItems[itemIndex].ProductName} cart quantity`,{
    
                    // })

                }else{
                    const tempProduct = {...action.payload,cartQuantity:1}
                state.cartItems.push(tempProduct);
                toast.success(`${tempProduct.ProductName} added to cart successfully`,{
                    autoClose:800
                })
                }
            }else{
                const tempProduct = {...action.payload,cartQuantity:1}
                state.cartItems.push(tempProduct);
                toast.success(`${tempProduct.ProductName} added to cart successfully`,{
                    autoClose:800
                })
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        removeFromCart(state,action){


            const nextCartItems = state.cartItems.filter(
                (cartItem) => {
                    if(cartItem._id === action.payload._id )
                    {
                        if(cartItem.SelectedSize === action.payload.SelectedSize){

                            return false
                        }

                    }
                    return true
                }
                
            );

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex(
                (cartItem) =>{
                    if(cartItem._id === action.payload._id )
                    {
                        if(cartItem.SelectedSize === action.payload.SelectedSize){

                            return true
                        }

                    }
                    return false;
                }
            )

console.log(itemIndex)
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => {
                        if(cartItem._id === action.payload._id )
                        {
                            if(cartItem.SelectedSize === action.payload.SelectedSize){
    
                                return false
                            }
    
                        }
                        return true
                    }
                    
                );
    
                state.cartItems = nextCartItems;
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        clearCart(state,action){
            state.cartItems =[];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
            state.cartTotalPoints = 0;
            // toast.error('Cart is cleared');
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        getTotals(state,action){
            let{total ,point,quantity} = state.cartItems.reduce(
                (cartTotal,cartItem) =>{
                    const {price,points,cartQuantity} = cartItem;
                    const itemTotal = price * cartQuantity;
                    const pointTotal = points * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.point += pointTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },{
                    total:0,
                    point:0,
                    quantity:0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
            state.cartTotalPoints = point;
            
        },
        cartTotal(state,action){
            state.cartTotalAmount = action.payload;
            

        }
    }
})

export const {addToCart , removeFromCart,decreaseCart,clearCart,getTotals,cartTotal} = cartSlice.actions;

export default cartSlice.reducer;