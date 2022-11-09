import { useDispatch, useSelector } from 'react-redux'
import { activateCardMaker, activatePostDeletePop, makeCardActive } from '../RTK/slices/cardSlice'
import { AddArticle } from './addArticle'
import './cardView.scss'

export const CardView = () => {
  const dispatch = useDispatch()
  const title = useSelector(state=> state.card.currentTitle)
  const body = useSelector(state=> state.card.currentBody)
  const active = useSelector(state=> state.card.active)
    return (
        <div onClick={()=>{
            
            dispatch(makeCardActive(!active))}} className="active-card-view">
            <div 
            onClick={e=>{
                    e.stopPropagation()
            }}
            className="active-card-content">
                <div 
                onClick={()=>dispatch(makeCardActive(!active))}
                className="article-info">
                    Article Info <div className="close">✕</div>
                    
                </div>
                <hr />
                <div className="card-title">{title}</div>
                <div className="card-body">{body}</div>
                <div className="post-controller">
                <div 
                onClick={()=>{
                    dispatch(makeCardActive(false))
                    dispatch(activateCardMaker(true))

                }}
                className="edit-post">Edit</div>
                <div 
                onClick={()=>{
                    dispatch(activatePostDeletePop(true))
                }}
                className="delete-post">Delete</div>
                </div>
            </div>
        </div>
    )
}

