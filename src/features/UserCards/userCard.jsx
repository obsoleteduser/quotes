import { useDispatch, useSelector } from 'react-redux'
import { setTargetedId, setUserColorModal, setUserView } from '../../RTK/slices/UsersSlice/userCardSlice'
import './userCard.scss'

export const UserCard = ({name, email, id, phone}) => {
    const dispatch = useDispatch()
    const bigCards = useSelector(state => state.user.bigCards)
    const userCardColors = useSelector(state=> state.user.userCardColors)
    console.log(userCardColors[id])
    return (
        <div
        style={{backgroundColor: userCardColors[id]}}
        className={bigCards ? 'user-card user-card-big': 'user-card'}>
            <div className="user-card__content">
                <div className="user-card-name">{name}</div>
                <div className="user-card-email">{email}</div>
                <div className="user-card-phone">{phone}</div>
            </div>
            <div className="user-card__options">
                <div 
                onClick={()=>{
                   dispatch(setTargetedId(id)) 
                   dispatch(setUserView(true))
                }}
                className="user-card__view">View</div>
                <div
                onClick={()=>{
                    dispatch(setTargetedId(id))
                    dispatch(setUserColorModal(true))
                }}
                className="user-card__color">Change color</div>
            </div>

        </div>
    )
}