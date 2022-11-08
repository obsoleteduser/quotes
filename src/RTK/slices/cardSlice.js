import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    large: false,
    active: false,
    color: 'black',
    currentTitle: '',
    currentBody: '',
    colorActive: false,
    colorId: null,
    cardMaker: false
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
        },
        setColorPickerActive: (state, action) => {
            state.colorActive = action.payload
        },
        setColor: (state, action)=>{
            state.color = action.payload
        },
        setColorId: (state, action)=>{
            state.colorId = action.payload
        },
        activateCardMaker: (state, action)=>{
            state.cardMaker = action.payload
        }

    }
})


export const { makeCardsLarger,
    makeCardActive,
    setCurrentBody,
    setCurrentTitile,
    setColorPickerActive,
    setColor,
    setColorId,
    activateCardMaker
} = cardSlice.actions
export default cardSlice.reducer