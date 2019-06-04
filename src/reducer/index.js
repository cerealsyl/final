import { combineReducers } from "redux";
import HomeReducer from './HomeReducer'
import SignUpReducer from './SignUpReducer'
import SignInReducer from './SignInReducer'

const combined = combineReducers({
    HomeReducer,
    SignUpReducer,
    SignInReducer
})

export default combined;