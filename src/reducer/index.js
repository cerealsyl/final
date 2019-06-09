import { combineReducers } from "redux";
import HomeReducer from './HomeReducer'
import SignUpReducer from './SignUpReducer'
import SignInReducer from './SignInReducer'
import profileReducer from './profileReducer'

const combined = combineReducers({
    HomeReducer,
    SignUpReducer,
    SignInReducer,
    profileReducer
})

export default combined;