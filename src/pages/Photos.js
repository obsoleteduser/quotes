import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PhotoCard } from "../features/UserCards/photos/photoCard"
import { getImages, setImage } from "../RTK/slices/PhotoSlice/photoSlice"
import './Photos.scss'


export const Photos = () =>{

    const photos = useSelector(state=>state.image.images)
    const dispatch = useDispatch()
    console.log(photos)

    useEffect(()=>{
        dispatch(getImages())
    }, [])

    return(
        <div className='photo-container'>
            {
                photos.map(photo=>(
                    <PhotoCard key={photo.id} imgURL={photo.url} title={photo.title}/>
                ))
            }
        </div>
       
    )
}