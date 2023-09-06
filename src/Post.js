import React,{forwardRef} from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
const Post= forwardRef(({displayName,
    userName,
    verified,
    text,
    image,
    avatar},ref)=>{
    return(
        <div className="Post" ref={ref}>
            <div className="Post-avatar">
                <Avatar src={avatar} />
            </div>
            <div className="Post-body">
                <div className="Post-header">
                    <div className="Post-headerText">
                        <h3>
                            {displayName}{" "} 
                            <span className='username'>
                                <VerifiedIcon className="post-badge"/> 
                                {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="Post-headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="pic"/>
                <div className='Post-footer'>
                        <ChatBubbleOutlineIcon  font-size="small"/>
                        <RepeatIcon font-size="small"/>
                        <FavoriteBorderIcon font-size="small"/>
                        <LeaderboardIcon font-size="small"/>
                </div>
            </div>
        </div>
    );
});

export default Post;