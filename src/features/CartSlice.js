import { createSlice } from "@reduxjs/toolkit"
import Apiproduct from "../Apiproduct"

const initialState = {
    cart: [],
    allProduct : Apiproduct,
    TotalPrice : 0 ,
    TotalQuntity :0,
  }

  export const cartSlice = createSlice({
    name: 'cartAction',
    initialState,
    reducers: {
        addToCart :(state, actions)=> {
                state.cart.push (actions.payload)
        }
     
    },
  })
  
  export const { addToCart, } = cartSlice.actions
  
  export default cartSlice.reducer