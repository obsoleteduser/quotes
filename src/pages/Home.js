import { PostCard } from '../cards/postCard'
import './Home.scss'


export const Home = () => {
    return (
        <div className="home">
            <div className="head-controller">
                <p>Article List</p>
                <div className="card-buttons">
                    <div className="big-cards card-btn">Make big cards</div>
                    <div className="add-articles card-btn">Add Articles</div>
                </div>

            </div>

            <div className="cards">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />            
            </div>
            <div className="post-more">Show more</div>

        </div>
    )
}