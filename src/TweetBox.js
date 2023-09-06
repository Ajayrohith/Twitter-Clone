import React,{useState} from "react";
import "./TweetBox.css";
import {Avatar} from "@mui/material";
import db from './firebase';
function TweetBox(){
    const [tweetMsg, setTweet]=useState("")
    const [tweetImg, setTweetImg]=useState("")
    const sendTweet = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Ajay boss',
            userName :'@ajayboss',
            verified :true,
            text : tweetMsg,
            image: tweetImg,
            avatar:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSyuHCGDUN6vGolF8KZPl-7PQN81qzk-bdCgukv8X8d-D45ii94Uxz3JfprlT9kW7bBO3qA2wt1wHyw-Eg"

        });
        setTweet("");
        setTweetImg("");
    };
    return(
        <div className="TweetBox">
            <form>
                <div className="TweetBox-input">
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <input
                    onChange={(e)=>setTweet(e.target.value)} 
                    value={tweetMsg} type="text" placeholder="What's happening"/>
                </div>
                <input 
                onChange={(e)=>setTweetImg(e.target.value)}
               value={tweetImg}  className="TweetBox-inputImg" type="text" placeholder="Optional :Enter image URL"/>
                <button  onClick={sendTweet} type="submit" className="TweetBox-button">Tweet</button>
               
            </form>
        </div>
    );
}

export default TweetBox;