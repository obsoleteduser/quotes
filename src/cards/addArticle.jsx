import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activateCardMaker, makeCardActive, setCardColor, setCardId } from '../RTK/slices/cardSlice'
import { makePost, setPost, updatePost } from '../RTK/slices/postSlice'
import './addArticle.scss'
import uniqid from 'uniqid'
export const AddArticle = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const id = useSelector(state=>state.card.currentCardId)
    
    const currentTitle = useSelector(state=>state.card.currentTitle)
    const currentBody = useSelector(state=>state.card.currentBody)
    const index = useSelector(state=>state.post.visiblePosts)
    
    useEffect(()=>{
        id && setTitle(currentTitle)
        
        {id && setBody(currentBody)}
    }, [])
    
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
                <input value={title}
                onChange={e=>setTitle(e.target.value)}
                type="text" name="" id="" placeholder='Title'/>
                <textarea value={body}
                onChange={e=>setBody(e.target.value)}
                name="" id="" cols="45" rows="12" placeholder='Write your article here'>
                    
                </textarea>
                <div 
                onClick={()=>{
                   !id? dispatch(makePost({title: title, body: body, id: index}))
                   : dispatch(updatePost({id: Number(id[1]), title, body}))
                    dispatch(activateCardMaker(false))
                }}
                className="article-submit">Submit</div>
            </div>
        </div>

    )
}

