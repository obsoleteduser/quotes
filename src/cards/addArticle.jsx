import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activateCardMaker, makeCardActive } from '../RTK/slices/cardSlice'
import { makePost, setPost } from '../RTK/slices/postSlice'
import './addArticle.scss'
import uniqid from 'uniqid'
export const AddArticle = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const id = useSelector(state=>state.card.currentCardId)
    const currentTitle = useSelector(state=>state.card.currentTitle)
    const index = useSelector(state=>state.post.visiblePosts)
    
    
    return (
        <div onClick={
            ()=>{
                dispatch(activateCardMaker(false))
            }
        } className="article-overlay">
            <div
            onClick={e=>e.stopPropagation()}
             className="article-container">
                <h1>{id ? 'Edit Post' : 'Add new article'}</h1>
                <input 
                onChange={e=>setTitle(e.target.value)}
                type="text" name="" id="" placeholder='Title'/>
                <textarea 
                onChange={e=>setBody(e.target.value)}
                name="" id="" cols="45" rows="12" placeholder='Write your article here'></textarea>
                <div 
                onClick={()=>{
                    dispatch(makePost({title: title, body: body, id: index}))
                    dispatch(activateCardMaker(false))
                }}
                className="article-submit">Submit</div>
            </div>
        </div>

    )
}

