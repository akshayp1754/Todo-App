import { combineReducers } from "redux";

import authReducer from "./auth"; 
import taskReducer from "./task"; 


// const rootReducer = combineReducers({
//   authReducer,   
//   taskReducer,  
// });

const rootReducer = combineReducers({
    authReducer,
    taskReducer
})

export default rootReducer
