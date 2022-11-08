import { useDispatch, useSelector } from 'react-redux'
import { makeCardActive } from '../RTK/slices/cardSlice'
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
            </div>
        </div>
    )
}

