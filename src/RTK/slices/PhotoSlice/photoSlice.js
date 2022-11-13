import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    images: []
}


export const getImages = createAsyncThunk(
    'images/getImages',
    async (_, {rejectWithValue, dispatch})=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        dispatch(
            setImage(response.data)
        )
    }
)


export const setImages = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImage: (state, action)=>{
            state.images = action.payload
        }
    }
})


export const {setImage} = setImages.actions
export default setImages.reducer