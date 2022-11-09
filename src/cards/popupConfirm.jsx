import { useDispatch } from 'react-redux'
import { activatePostDeletePop } from '../RTK/slices/cardSlice'
import './popUpConfirm.scss'

export const ConfirmDelete = ()=>{
    const dispatch = useDispatch()
    return(
    <div className="delete-overlay">
        <div className="delete-popup">
            <p>Do you really want to delete this post?</p>
            <div className="delete-controller">
                <div className="delete-confirm">Delete</div>
                <div
                onClick={()=>{
                    dispatch(activatePostDeletePop(false))
                }}
                className="delete-cancel">Cancel</div>
            </div>
        </div>
    </div>
    )
}