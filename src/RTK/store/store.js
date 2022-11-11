 import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../slices/cardSlice";
import  postSlice  from "../slices/postSlice";
import userCardSlice from "../slices/UsersSlice/userCardSlice";


 export const store =  configureStore({
    reducer: {
        post: postSlice,
        card: cardSlice,
        user: userCardSlice
    }
 })