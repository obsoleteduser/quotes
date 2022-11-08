import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    large: false,
    active: false,
    color: 'default',
    currentTitle: '',
    currentBody: ''
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        makeCardsLarger: (state, action) => {
            state.large = action.payload
        },
        makeCardActive: (state, action) => {
            state.active = action.payload
        },
        setCurrentTitile: (state, action) => {
            state.currentTitle = action.payload
        },
        setCurrentBody: (state, action) => {
            state.currentBody = action.payload
        }
    }
})


export const { makeCardsLarger, makeCardActive, setCurrentBody, setCurrentTitile } = cardSlice.actions
export default cardSlice.reducer