import { useDispatch, useSelector } from 'react-redux'
import { makeCardActive, setCurrentBody, setCurrentTitile } from '../RTK/slices/cardSlice'
import './postCard.scss'

export const PostCard = ({title, body})=>{
    const active = useSelector(state=>state.card.active)
    const dispatch = useDispatch()
    const isLarge = useSelector(state=>state.card.large)
    return(
        <div style={isLarge?{width: '30rem', height: '20rem'}:{}} className="post-card">
            <div className="card-title">{title}</div>
            <div className="card-body">{body}</div>
            <div className="card-controller">
                <div onClick={()=>{
                    dispatch(setCurrentBody(body))
                    dispatch(setCurrentTitile(title))
                
                    dispatch(makeCardActive(!active))}} className="card-view">View</div>
                <div className="card-color">Change Color</div>
            </div>
            
        </div>
    )
}