import React from "react";
import "./profile.css"
import avamini from "./img/Elon_musk-mini.jpg"
import ava from "./img/Elon_musk.jpg"


function Profile() {
    return (
        <div className="profile">
            <div className="me">
                <img src={ava} alt="" className="me__img" />
                <p className="me__text">Elon Mask</p>
            </div>
            <div className="posts">
                <h1 className="posts__title">My Posts</h1>
                <input type="text" placeholder="enter the post" className="post__text" />
                <button className="posts__btn">Add post</button>
                <div className="post">
                    <img src={avamini} alt="" className="post__img" />
                    <span>Elon Mask</span>
                    <p className="post__text">Some text</p>
                </div>
            </div>
        </div>
    )
}

export default Profile