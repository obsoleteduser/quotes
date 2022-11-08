import { useDispatch, useSelector } from 'react-redux'
import { setColor, setColorPickerActive } from '../RTK/slices/cardSlice'
import './cardColor.scss'

export const CardColor = ()=>{
    const dispatch = useDispatch()
    
    const colorActive= useSelector(state=>state.card.colorActive)
    return(
    <div onClick={()=>{dispatch(setColorPickerActive(false))}} className="color-picker">
        <div 
        onClick={e=>e.stopPropagation()}
        className="picker-content">
        <h1>Set card color</h1>
        <hr/>
        <input onChange={e => dispatch(setColor(e.target.value))} type="color" name="" id="" />
        </div>
    </div>
    )
}