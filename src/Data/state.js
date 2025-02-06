let store = {
  _state: {
    profilePage: {
      postMessage: [
        { message: "Hello World", id: 1 },
        { message: "I am Elon Mask", id: 2 },
        { message: "Let's go to Mars", id: 3 },
        { message: "Buy a Tesla", id: 4 },
      ],
      newPostText: ""
    },

    messagePage: {
      messageMessages: [
        { name: "Ivan Ivanovich", message: "Hello World", id: 1 },
        { name: "Donald Trump", message: "Let's build a wall ", id: 2 },
        { name: "Bill Gates", message: "Waiting for a new chip ", id: 3 }
      ],
      newMessage: ""
    },
  },

  rerenderTree() { },

  subscribe(observer) {
    this.rerenderTree = observer
  },

  // addPost (postText) {
  // },

  addMessage(text, name) {
    let newMessage = {
      name: name,
      message: text,
      id: this._state.messagePage.messageMessages.length + 1,
    }
    this._state.messagePage.messageMessages.push(newMessage)
    this.rerenderTree(this._state)
  },

  // onPostChange (text) {
  //   this._state.profilePage.newPostText = text
  //   this.rerenderTree(this._state)
  // },

  onMessageChange(text) {
    this._state.messagePage.newMessage = text
    this.rerenderTree(this._state)
  },

  getState() {
    return this._state
  },

  dispatch(action) {
    if (action.type == "ADD-POST") {
      let newPost = {
        message: action.text,
        id: this._state.profilePage.postMessage.length + 1,
      }
      this._state.profilePage.postMessage.unshift(newPost)
    } else if (action.type == "POST-CHANGE") {
      this._state.profilePage.newPostText = action.text
    } else if (action.type == "ADD-MESSAGE") {
      let newMessage = {
        name: action.name,
        message: action.text,
        id: this._state.messagePage.messageMessages.length + 1,
      }
      this._state.messagePage.messageMessages.push(newMessage)
    } else if (action.type == "MESSAGE-CHANGE") {
      this._state.messagePage.newMessage = action.text
    }
    this.rerenderTree(this._state)
  }
}


export default store;