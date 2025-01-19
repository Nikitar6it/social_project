import React from "react";
import "./messages.css"
import Message from "../message/Message";

function Messages(props){
    return(
        <div className="messages">
            {props.messagePage.messageMessages.map((e) => <Message name={e.name} message={e.message} id={e.id} key={e.id} />)}
            {/* <Message name={messageNames[0].name} message={messageMessages[0].message} id={messageNames[0].id}/>
            <Message name={messageNames[1].name} message={messageMessages[1].message} id={messageNames[1].id}/>
            <Message name={messageNames[2].name} message={messageMessages[2].message} id={messageNames[2].id}/>
            <input type="text" className="messages__input" placeholder="insert message"/>
            <button className="messages__btn">Send</button> */}
        </div>
    )
}

export default Messages