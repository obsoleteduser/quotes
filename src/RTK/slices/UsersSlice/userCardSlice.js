import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    displayedUsers: 3,
    bigCards: false,
    targetCardId: '',
    userCardColors: {},
    users: [],
    colorModalActive: false
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
        }
    }
})


export const { setUsers,
    setDisplayedUsers,
    setCardBig,
    setUserCardColor,
    setTargetedId,
    setUserColorModal,
} = userSlice.actions
export default userSlice.reducer