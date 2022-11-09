import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
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
        },
        deletePost: (state, action)=>{
            console.log(action.payload)
           state.posts = state.posts.filter(item => item.id !== action.payload)
           console.log(action.payload)
        },
        updatePost: (state, action)=>{
            console.log(action.payload.id)
            console.log(action.payload.title)
            console.log(action.payload.body)
            state.posts = state.posts.filter(item => item.id !== action.payload.id)
            state.posts.splice(action.payload.id-1, 0, {...action.payload, id: action.payload.id}) 
           
            
            
        }
    }
})


export const { setPost, makePost, setVisiblePosts, deletePost, updatePost } = postSlice.actions
export default postSlice.reducer

