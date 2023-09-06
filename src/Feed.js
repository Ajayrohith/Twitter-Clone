import React,{useState, useEffect} from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './firebase'; // Import the Firebase core module
import 'firebase/auth'; // Import any specific Firebase services you need
import 'firebase/firestore'; // Import other Firebase services if required
import FlipMove from "react-flip-move";

function Feed(){
    const [posts,setPost]=useState([]);
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>{
            setPost(snapshot.docs.map(doc=>doc.data()))
        })
    },[]);
    return(
        <div className="feed">
            <div className="header"> 
                <h2>Home</h2>
            </div>
            
        <TweetBox/>
        <FlipMove>
            {posts.map((posts)=>(
                <Post
                    key={posts.text}
                    displayName={posts.displayName}
                    avatar={posts.avatar}
                    image={posts.image}
                    text={posts.text}
                    userName={posts.userName}
                    verified={posts.verified}
                />
            ))}
        </FlipMove>
            
            
        </div>
    );
}

export default Feed;