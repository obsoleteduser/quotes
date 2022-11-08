import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    large: false
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        makeCardsLarger: (state, action)=>{
            state.large = action.payload
        }
    }  
})


export const {makeCardsLarger} = cardSlice.actions
export default cardSlice.reducer