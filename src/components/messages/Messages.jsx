import React from "react";
import "./messages.css"
import Message from "../message/Message";

function Messages(props){
    let text = React.createRef()
    let addMessage = () => {
        props.addMessage(text.current.value, "Elon Mask")
    }
    let onMessageChange = () =>{
        props.onMessageChange(text.current.value)
    }
    return(
        <div className="messages">
            {props.messagePage.messageMessages.map((e) => <Message name={e.name} message={e.message} id={e.id} key={e.id} />)}
            {/* <Message name={messageNames[0].name} message={messageMessages[0].message} id={messageNames[0].id}/>
            <Message name={messageNames[1].name} message={messageMessages[1].message} id={messageNames[1].id}/>
            <Message name={messageNames[2].name} message={messageMessages[2].message} id={messageNames[2].id}/>
            <input type="text" className="messages__input" placeholder="insert message"/>
            <button className="messages__btn">Send</button> */}
            <input value={props.newMessage} onChange={onMessageChange} ref={text} type="text" placeholder="enter the message"/>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default Messages