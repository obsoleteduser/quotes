import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    displayedUsers: 3,
    bigCards: false,
    targetCardId: '',
    userCardColors: {},
    users: [],
    colorModalActive: false,
    userViewActive: false,
    userRemovePopUpActive: false,
    editUserModalActive: false,
}


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue, dispatch }) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(setUsers(response.data))
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setDisplayedUsers: (state, action) => {
            state.displayedUsers = action.payload
        },
        setCardBig: (state, action) => {
            state.bigCards = action.payload
        },
        setTargetedId: (state, action) => {
            state.targetCardId = action.payload
        },
        setUserCardColor: (state, action) => {
            state.userCardColors[state.targetCardId] = action.payload
        },
        setUserColorModal: (state, action)=>{
            state.colorModalActive = action.payload
        },

        setUserView: (state, action)=>{
            state.userViewActive = action.payload
        },
        setUserRemovePopUp: (state, action)=>{
            state.userRemovePopUpActive = action.payload
        },
        removeUser: (state, action) => {
            
           state.userCardColors[`${action.payload}`] = null
            state.users = state.users.filter(user => user.id !== action.payload) 
        },

        editUserData: (state, action) =>{
            const targetuser = state.users.filter(user => user.id === state.targetCardId)[0]
            targetuser.address = action.payload.address
            targetuser.website = action.payload.website
            targetuser.company = action.payload.company
            state.users = state.users.filter(user => user.id !== state.targetCardId)
            state.users.splice(state.targetCardId-1, 0, targetuser)
            
        },
        editUserModal: (state, action)=>{
            state.editUserModalActive = action.payload
        }
    }
})


export const { setUsers,
    setDisplayedUsers,
    setCardBig,
    setUserCardColor,
    setTargetedId,
    setUserColorModal,
    setUserView,
    removeUser,
    setUserRemovePopUp,
    editUserData,
    editUserModal,
} = userSlice.actions
export default userSlice.reducer