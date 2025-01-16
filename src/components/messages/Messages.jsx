import React from "react";
import "./messages.css"
import Message from "../message/Message";

function Messages(){
    let messageNames = [
        { id:1},
        { id:2},
        { id:3}
    ] 
    let messageMessages = [
        {name:"Ivan Ivanovich", message:"Hello World", id:1},
        {name:"Donald Trump", message:"Let's build a wall ", id:2},
        {name:"Bill Gates", message:"Waiting for a new chip ", id:3}
    ]
    return(
        <div className="messages">
            {messageMessages.map((e) => <Message name={e.name} message={e.message} id={e.id} key={e.id} />)}
            {/* <Message name={messageNames[0].name} message={messageMessages[0].message} id={messageNames[0].id}/>
            <Message name={messageNames[1].name} message={messageMessages[1].message} id={messageNames[1].id}/>
            <Message name={messageNames[2].name} message={messageMessages[2].message} id={messageNames[2].id}/>
            <input type="text" className="messages__input" placeholder="insert message"/>
            <button className="messages__btn">Send</button> */}
        </div>
    )
}

export default Messages