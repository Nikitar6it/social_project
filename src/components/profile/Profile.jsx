import React from "react";
import "./profile.css"
import ava from "./img/Elon_musk.jpg"
import Posts from "../posts/Posts";


function Profile() {
    return (
        <div className="profile">
            <div className="me">
                <img src={ava} alt="" className="me__img" />
                <p className="me__text">Elon Mask</p>
            </div>
            <Posts />
        </div>
    )
}

export default Profile