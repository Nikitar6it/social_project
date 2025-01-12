import React from "react";
import "./message.css"


function Message(props) {
    return(
        <div className="message">
            <div className="names">
            <p className="message__name">{props.name}</p>
            </div>
            <p className="message__notification">{props.message}</p>
        </div>
    )
}

export default Message 