import { combineReducers } from "redux";
import HomeReducer from 'HomeReducer';
import SignUpReducer from 'SignUpReducer'

const combined = combineReducers({
    HomeReducer,
    SignUpReducer,
})

export default combined;