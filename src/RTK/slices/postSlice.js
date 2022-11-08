import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: []
}


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue, dispatch }) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPost(response.data))
    }
)



export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload
        },
        makePost: (state, action) =>{
            state.posts.unshift(action.payload)
        }
    }
})


export const { setPost, makePost } = postSlice.actions
export default postSlice.reducer

