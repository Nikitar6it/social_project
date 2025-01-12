import React from "react";
import "./messages.css"
import Message from "../message/Message";

function Messages(){
    let messageNames = [
        {name:"Ivan Ivanovich", id:1},
        {name:"Donald Trump", id:2},
        {name:"Bill Gates", id:3}
    ] 
    let messageMessages = [
        {message:"Hello World", id:1},
        {message:"Let's build a wall", id:2},
        {message:"Waiting for a new chip", id:3}
    ]
    return(
        <div className="messages">
            {}
            <Message name={messageNames[0].name} message={messageMessages[0].message} id={messageNames[0].id}/>
            <Message name={messageNames[1].name} message={messageMessages[1].message} id={messageNames[1].id}/>
            <Message name={messageNames[2].name} message={messageMessages[2].message} id={messageNames[2].id}/>
            <input type="text" className="messages__input" placeholder="insert message"/>
            <button className="messages__btn">Send</button>
        </div>
    )
}

export default Messages