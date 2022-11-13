import { useEffect } from 'react'
import './photoCard.scss'
export const PhotoCard = ({title, imgURL})=>{


    return(
        <div
        style={{background: `url(${imgURL})`}}
        className="photo-card">
            <h3>{title}</h3>
        </div>
    )
}