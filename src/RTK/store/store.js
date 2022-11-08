 import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../slices/cardSlice";
import  postSlice  from "../slices/postSlice";


 export const store =  configureStore({
    reducer: {
        post: postSlice,
        card: cardSlice
    }
 })