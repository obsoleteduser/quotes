import './userRemovePopUp.scss'
import { removeUser, setUserRemovePopUp, setUserView } from '../../RTK/slices/UsersSlice/userCardSlice'
import { useDispatch, useSelector } from 'react-redux'

export const UserRemovePopUp = ()=>{
    const dispatch = useDispatch()
    const id = useSelector(state=>state.user.targetCardId)
    return(
        <div
       
        className="user-remove-overlay">
        <div className="user-remove-modal">
            <h3>Do you really want to delete this user?</h3>
            <div className="user-remove-controller">
            <div 
            onClick={()=>{
                dispatch(removeUser(id))
                dispatch(setUserRemovePopUp(false))
                dispatch(setUserView(false))
            }}
            className="user-remove-confirm">Delete</div>

            <div 
             onClick={()=>{
                dispatch(setUserRemovePopUp(false))  
                                      
            }}
            className="user-remove-cancel">Cancel</div> 
            </div>
        </div>
        </div>
    )
}