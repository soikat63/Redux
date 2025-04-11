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
          let QuntityUpdate = state.cart.findIndex((item)=> item.id === actions.payload.id)
          if (QuntityUpdate >= 0 ) {
            state.cart[QuntityUpdate].quntity +=1
          }else {
            state.cart.push (actions.payload)
          }    
        },

        removeToCart : (state, actions)=>{
          state.cart = state.cart.filter ((item)=> item.id !== actions.payload)

        },

        quntityItemIncrease :(state, actions)=>{
          state.cart = state.cart.map ((item)=>{
            if (item.id === actions.payload) {
              return {...item , quntity : item.quntity +1}
            }
            return item
          })
        },

        quntityItemDecrease :(state, actions)=>{
          state.cart = state.cart.map ((item)=>{
            if (item.id === actions.payload) {
              if (item.quntity > 1) {
                
                return {...item , quntity : item.quntity -1}
              }
            }
            return item
          })
        },
     
    },
  })
  
  export const { addToCart, removeToCart , quntityItemIncrease, quntityItemDecrease} = cartSlice.actions
  
  export default cartSlice.reducer