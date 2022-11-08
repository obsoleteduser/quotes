import { useSelector } from 'react-redux'
import './postCard.scss'

export const PostCard = ({title, body})=>{
    const isLarge = useSelector(state=>state.card.large)
    return(
        <div style={isLarge?{width: '30rem', height: '20rem'}:{}} className="post-card">
            <div className="card-title">{title}</div>
            <div className="card-body">{body}</div>
            <div className="card-controller">
                <div className="card-view">View</div>
                <div className="card-color">Change Color</div>
            </div>
            
        </div>
    )
}