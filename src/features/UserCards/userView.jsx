import { useDispatch, useSelector } from 'react-redux'
import { editUserModal, setUserRemovePopUp, setUserView } from '../../RTK/slices/UsersSlice/userCardSlice'
import './userView.scss'

export const UserView = ()=>{
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const cardId = useSelector(state=>state.user.targetCardId)
    
    console.log(cardId)
  const {website, address, company} = users.filter(user=>user.id === cardId)[0]
  

    return(
        <div 
        onClick={()=>{
            dispatch(setUserView(false))
        }}
        className="user-info-overlay">
            <div 
            onClick={(e)=>e.stopPropagation()}
            className="user-info-modal">
                <div className="user-info-content">
                    <div className="user-address"><strong>Address/street: </strong>{address.street}</div>
                    <div className="user-company"><strong>Company name: </strong>{company.name}</div>
                    <div className="user-website"><strong>Website: </strong>{website}</div>
                </div>
                <div className="user-info-controller">
                    <div
                    onClick={()=>{
                        dispatch(editUserModal(true))
                    }}
                    className="user-info-edit">Edit</div>
                    <div
                    onClick={()=>{
                        dispatch(setUserRemovePopUp(true))                        
                    }}
                    className="user-info-delete">Delete</div>
                </div>
            </div>
        </div>
    )
}