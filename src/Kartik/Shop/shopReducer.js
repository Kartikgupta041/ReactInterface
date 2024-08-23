// action and store 

import { ADD_TO_CART, REMOVE_FROM_CART } from "./shopActionType"

// initialize the global state
const initializeState = {cart: 0, cartItems : []}

// 2 things to be checked : state, action
const shopReducer = (state=initializeState, action) => 
{
    switch(action.type){
        case ADD_TO_CART:
            return{...state,cart: state.cart+1, cartItems:[...state.cartItems, action.playload]}
        case REMOVE_FROM_CART:
            return{...state, cart: state.cart>0?state.cart-1:0, cartItems:state.cartItems.filter((_,index)=>index!==action.playload)}
        default: return state
    }
}

// send reducer function to store
export default shopReducer