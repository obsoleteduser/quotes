import { useDispatch, useSelector } from 'react-redux'
import { setUserCardColor, setUserColorModal } from '../../RTK/slices/UsersSlice/userCardSlice'
import './userColor.scss'

export const UserColor = ()=>{
    const dispatch =  useDispatch()
    
    return(
        <div 
        onClick={()=> dispatch(setUserColorModal(false))}
        className="user-color-overlay">
            <div
            onClick={(e)=>{
                e.stopPropagation()
            }}
            className="user-color-modal">
                <h1>Set color</h1>
                <input
                onChange={(e)=>{
                    dispatch(
                        setUserCardColor(e.target.value)
                    )
                }}
                type="color" name="" id="" />
            </div>
        </div>
    )
}