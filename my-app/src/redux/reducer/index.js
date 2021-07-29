import { combineReducers } from "redux";
import reducer from "./posts";
import user from './user'
import reducerMyPost from './mypost'
const rootReducer = combineReducers({
    listPost: reducer,
    user:user,
    myPost:reducerMyPost
});

export default rootReducer;
