import React from "react";
import "./messages.css"
import Message from "../message/Message";

function Messages(){
    return(
        <div className="messages">
            <Message />
            <Message />
            <Message />
            <input type="text" className="messages__input" placeholder="insert message"/>
            <button className="messages__btn">Send</button>
        </div>
    )
}

export default Messages