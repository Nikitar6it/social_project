import { combineReducers, createStore } from "redux";
import profileReduser from "./profileReduser";
import messageReduser from "./messageReduser";


let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    
});
let store = createStore(redusers) 


export default store