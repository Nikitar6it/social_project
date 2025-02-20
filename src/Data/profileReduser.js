const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"


let intitialState = {
  postMessage: [
    { message: "Hello World", id: 1 },
    { message: "I am Elon Mask", id: 2 },
    { message: "Let's go to Mars", id: 3 },
    { message: "Buy a Tesla", id: 4 },
  ],
  newPostText: ""
}
let profileReduser = (state=intitialState, action) => {
    if (action.type == ADD_POST) {
        let newPost = {
            message: action.text,
            id: state.postMessage.length + 1,
        }
        state.postMessage.unshift(newPost)
    } else if (action.type == POST_CHANGE) {
        state.newPostText = action.text
    }
    return state
}

export default profileReduser

export let addPostAC = (text) => {
  return {
    type: ADD_POST,
    text: text
  }
}

export let onPostChangeAC = (text) => {
  return {
    type: POST_CHANGE,
    text: text,
  }
}