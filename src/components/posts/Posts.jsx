import React from "react";
import "./posts.css"
import Post from "../post/Post";
import { addPostAC, onPostChangeAC } from "../../Data/profileReduser";


function Posts(props){
    console.log(props)
    let postText = React.createRef()
    let addPost = ()=> {
        props.dispatch(addPostAC(postText.current.value))
    }
    let onPostChange = () =>{
        props.dispatch(onPostChangeAC(postText.current.value))
    }
    return(
        <div className="posts">
                <h1 className="posts__title">My Posts</h1>
                <input onChange={onPostChange} value={props.newPostText} ref={postText} type="text" placeholder="enter the post" className="post__text" />
                <button className="posts__btn" onClick={addPost}>Add post</button>
                {props.postMessage.map((e) => <Post message={e.message} key={e.id}/>)}
                {/* <Post message="Hello World" />
                <Post message="I am Elon Mask" />
                <Post message="Let's go to Mars"/>
                <Post message="Buy a Tesla"/> */}
            </div>
    )
}

export default Posts