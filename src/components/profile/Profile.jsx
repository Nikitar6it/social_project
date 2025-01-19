import React from "react";
import "./profile.css"
import Posts from "../posts/Posts";
import ProfileInfo from "../profileInfo/ProfileInfo";
// import Messages from "../messages/Messages";


function Profile(props) {
    return (
        <div className="profile">
            <ProfileInfo />
            <Posts postMessage={props.profilePage.postMessage}/>
            {/* <Messages /> */}
        </div>
    )
}

export default Profile