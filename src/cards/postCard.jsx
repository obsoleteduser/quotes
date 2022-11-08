import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeCardActive, setCurrentBody, setCurrentTitile, setColorPickerActive, setColorId } from '../RTK/slices/cardSlice'
import './postCard.scss'

export const PostCard = ({title, body, id})=>{
    const colorId = useSelector(state=>state.card.colorId)
    const active = useSelector(state=>state.card.active)
    const dispatch = useDispatch()
    const isLarge = useSelector(state=>state.card.large)
    const color = useSelector(state=>state.card.color)
    const newcolor = colorId===id ? color : 'black'
    return(
        <div style={isLarge?{width: '30rem', height: '20rem', backgroundColor: newcolor}:{backgroundColor: newcolor}} className="post-card">
            <div className="card-title">{title}</div>
            <div className="card-body">{body}</div>
            <div className="card-controller">
                <div onClick={()=>{
                    dispatch(setCurrentBody(body))
                    dispatch(setCurrentTitile(title))
                
                    dispatch(makeCardActive(!active))}} className="card-view">View</div>
                <div 
                onClick={
                    
                    ()=>{
                        dispatch(setColorId(id))
                        dispatch(setColorPickerActive(true))}}
                className="card-color">Change Color</div>
            </div>
            
        </div>
    )
}