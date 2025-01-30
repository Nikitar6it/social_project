import { rerenderTree } from "../render"


let state = {
  profilePage: {
    postMessage: [
      { message: "Hello World", id: 1 },
      { message: "I am Elon Mask", id: 2 },
      { message: "Let's go to Mars", id: 3 },
      { message: "Buy a Tesla", id: 4 },
    ],
    newPostText:""
  },

  messagePage: {
    messageMessages: [
      { name: "Ivan Ivanovich", message: "Hello World", id: 1 },
      { name: "Donald Trump", message: "Let's build a wall ", id: 2 },
      { name: "Bill Gates", message: "Waiting for a new chip ", id: 3 }
    ],
    newMessage:""
  },

}

export let addPost = (postText) => {
  let newPost = {
    message: postText,
    id: state.profilePage.postMessage.length + 1,
  }
  state.profilePage.postMessage.unshift(newPost)
  rerenderTree(state)
}

export let addMessage = (text, name) => {
  let newMessage = {
    name: name,
    message: text,
    id: state.messagePage.messageMessages.length + 1,
  }
  state.messagePage.messageMessages.push(newMessage)
  rerenderTree(state)
}

export let onPostChange = (text) => {
  state.profilePage.newPostText = text
  rerenderTree(state)
}

export let onMessageChange = (text) => {
  state.messagePage.newMessage = text
  rerenderTree(state)
}

export default state;
