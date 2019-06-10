import { combineReducers } from "redux";
import HomeReducer from './HomeReducer'
import SignUpReducer from './SignUpReducer'
import SignInReducer from './SignInReducer'
import profileReducer from './profileReducer'
import SearchBarReducer from './SearchBarReducer'

const combined = combineReducers({
    HomeReducer,
    SignUpReducer,
    SignInReducer,
    profileReducer,
    SearchBarReducer,
})

export default combined;