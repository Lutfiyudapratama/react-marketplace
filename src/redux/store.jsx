import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import {productReducer }from "./productSlice"
import { BannerReducer } from "./BannerSlice";
import userReducer from "./UserSlice";

export default configureStore({
    reducer: combineReducers({
        cart: cartReducer,
        banner: BannerReducer,
        product: productReducer,
        user: userReducer
    })
})