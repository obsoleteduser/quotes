import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    visiblePosts: '',
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
        setVisiblePosts: (state, action) =>{
            state.visiblePosts = action.payload
        },
        setPost: (state, action) => {
            state.posts = action.payload
        },
        makePost: (state, action) =>{
            state.posts.splice(state.visiblePosts-1, 0, action.payload)
        }
    }
})


export const { setPost, makePost, setVisiblePosts } = postSlice.actions
export default postSlice.reducer

