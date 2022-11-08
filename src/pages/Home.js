import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostCard } from '../cards/postCard'
import { makeCardsLarger } from '../RTK/slices/cardSlice'
import { getPosts } from '../RTK/slices/postSlice'
import './Home.scss'


export const Home = () => {
    const cardLarge = useSelector(state=>state?.card?.large)
    const [postNum, setPostNum] = useState(3)
    const posts = useSelector((state)=>state?.post?.posts)
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            dispatch(getPosts())
            
        }
        ,[]
    )

    const filteredPosts = posts.filter(post => posts.indexOf(post)<postNum);
    if(postNum%2!==0 && cardLarge) setPostNum(postNum=>postNum+1)
    else if(postNum%3!==0 && !cardLarge) setPostNum(postNum=>postNum-1)
    

    return (
        <div className="home">
            <div className="head-controller">
                <p>Article List</p>
                <div className="card-buttons">
                    <div onClick={()=>{
                        
                        dispatch(makeCardsLarger(!cardLarge))}} className="big-cards card-btn">Make big cards</div>
                    <div className="add-articles card-btn">Add Articles</div>
                </div>

            </div>

            <div style={cardLarge?{gridTemplateColumns: 'repeat(2, 1fr)'}: {}} className="cards">
                    {
                        filteredPosts.map(post=>(
                            <PostCard title={post.title} body={post.body}></PostCard>
                        ))
                    }  
            </div>
            <div onClick={()=>{setPostNum((postNum)=>!cardLarge && postNum%3==0 ? postNum+3: postNum+2)}} className="post-more">Show more</div>

        </div>
    )
}