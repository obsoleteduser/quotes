import { useSelector } from 'react-redux'
import './userCard.scss'

export const UserCard = ({name, email, id, phone}) => {
    const bigCards = useSelector(state => state.user.bigCards)
    return (
        <div className={bigCards ? 'user-card user-card-big': 'user-card'}>
            <div className="user-card__content">
                <div className="user-card-name">{name}</div>
                <div className="user-card-email">{email}</div>
                <div className="user-card-phone">{phone}</div>
            </div>
            <div className="user-card__options">
                <div className="user-card__view">View</div>
                <div className="user-card__color">Change color</div>
            </div>

        </div>
    )
}