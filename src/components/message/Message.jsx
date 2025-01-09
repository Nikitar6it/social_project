import React from "react";
import "./message.css"


function Message() {
    return(
        <div className="message">
            <div className="names">
            <p className="message__name">Ivan</p>
            </div>
            <p className="message__notification">Hello, how are you?</p>
        </div>
    )
}

export default Message 