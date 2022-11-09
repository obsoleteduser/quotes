import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    large: false,
    active: false,
    currentTitle: '',
    currentBody: '',
    cardColor: {},
    currentCardId: '',
    colorActive: false,
    cardMaker: false,
    postDeletePop: false
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
        activateCardMaker: (state, action)=>{
            state.cardMaker = action.payload
        },
        setCardColor: (state, action)=>{
            state.cardColor[state.currentCardId] = action.payload
        },
        setCardId:(state, action)=>{
            state.currentCardId = action.payload
        },
        activatePostDeletePop: (state, action) =>{
            state.postDeletePop = action.payload
        }

    }
})


export const { makeCardsLarger,
    makeCardActive,
    setCurrentBody,
    setCurrentTitile,
    setColorPickerActive,
    activateCardMaker,
    setCardColor,
    setCardId,
    activatePostDeletePop
} = cardSlice.actions
export default cardSlice.reducer