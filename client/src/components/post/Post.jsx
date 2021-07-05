import './post.css'
import {MoreVert} from '@material-ui/icons'
import { Users } from "../../dummyData";
function Post({post}) {
    
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src= {`assets/${Users.filter(u => u.id===post.userId)[0].profilePicture}`} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u => u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                      <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                {/* //post?.desc */}
                    <span className="postText">{post?.desc}</span> 
                    <img src={`assets/${post.photo}`} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src='/assets/like.png' alt=''/>
                        <img className='likeIcon' src='/assets/heart.png' alt=''/>
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottom">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post
