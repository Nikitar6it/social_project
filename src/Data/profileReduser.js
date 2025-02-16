const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"


let profileReduser = (action, state) => {
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