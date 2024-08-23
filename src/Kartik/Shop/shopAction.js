import { ADD_TO_CART, REMOVE_FROM_CART } from "./shopActionType"


// declare all functions 
export const addToCart= (product) =>{
    return{type : ADD_TO_CART, playload : product}
}

export const removeFromCart = (index) =>{
    return{type : REMOVE_FROM_CART, playload : index}
}