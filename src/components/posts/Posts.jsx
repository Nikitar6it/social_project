import React from "react";
import "./posts.css"
import Post from "../post/Post";

function Posts(){
    return(
        <div className="posts">
                <h1 className="posts__title">My Posts</h1>
                <input type="text" placeholder="enter the post" className="post__text" />
                <button className="posts__btn">Add post</button>
                <Post message="Hello World" />
                <Post message="I am Elon Mask" />
                <Post message="Let's go to Mars"/>
                <Post message="Buy a Tesla"/>
            </div>
    )
}

export default Posts