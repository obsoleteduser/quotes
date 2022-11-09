import { useDispatch, useSelector } from 'react-redux'
import { activatePostDeletePop, makeCardActive, setCardColor, setCardId } from '../RTK/slices/cardSlice'
import { deletePost, setVisiblePosts } from '../RTK/slices/postSlice'
import './popUpConfirm.scss'

export const ConfirmDelete = ()=>{
    const dispatch = useDispatch()
    const postID = useSelector(state=>state.card.currentCardId)
    const postsNum = useSelector(state=>state.post.visiblePosts)
    return(
    <div className="delete-overlay">
        <div className="delete-popup">
            <p>Do you really want to delete this post?</p>
            <div className="delete-controller">
                <div 
                
                onClick={()=>{
                    dispatch(deletePost(Number(postID[1])))
                    dispatch(activatePostDeletePop(false))
                    dispatch(makeCardActive(false))
                    dispatch(setCardColor('black'))
                }}

                className="delete-confirm">Delete</div>
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