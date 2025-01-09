import React from "react";
import "./post.css"
import avamini from "./img/Elon_musk-mini.jpg"

function Post(props) {
    return (
        <div className="post">
            <img src={avamini} alt="" className="post__img" />
            <span>Elon Mask</span>
            <p className="post__text">{props.message}</p>
        </div>
    )
}

export default Post