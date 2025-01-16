import React from "react";
import "./profileInfo.css"
import ava from "./img/Elon_musk.jpg"

function ProfileInfo() {
    return (
        <div className="me">
            <img src={ava} alt="" className="me__img" />
            <p className="me__text">Elon Mask</p>
        </div>
    )
}

export default ProfileInfo