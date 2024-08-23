import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./shopReducer";

// configure the store 
// assign a reducer 
const store = configureStore({
    reducer: {shop:shopReducer}
})

//make store available. Open the shop
export default store
