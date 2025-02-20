const ADD_MESSAGE = "ADD-MESSAGE"
const MESSAGE_CHANGE = "MESSAGE-CHANGE"


let intitialState = {
  messageMessages: [
    { name: "Ivan Ivanovich", message: "Hello World", id: 1 },
    { name: "Donald Trump", message: "Let's build a wall ", id: 2 },
    { name: "Bill Gates", message: "Waiting for a new chip ", id: 3 }
  ],
  newMessage: ""
}
let messageReduser = (state=intitialState, action) => {
    if (action.type == ADD_MESSAGE) {
        let newMessage = {
          name: action.name,
          message: action.text,
          id: state.messageMessages.length + 1,
        }
        state.messageMessages.push(newMessage)
      } else if (action.type == MESSAGE_CHANGE) {
        state.newMessage = action.text
      }
    return state
}

export default messageReduser

export let addMessageAC = (text, name) => {
    return {
      type: ADD_MESSAGE,
      text: text,
      name: name,
    }
  }
  
  export let onMessageChangeAC = (text) => {
    return {
      type: MESSAGE_CHANGE,
      text: text,
    }
  }