import { combineReducers } from "redux";
import HomeReducer from './HomeReducer'
import SignUpReducer from './SignUpReducer'
import SignInReducer from './SignInReducer'
import SearchBarReducer from './SearchBarReducer'
import SearchStoryReducer from './SearchStoryDetailReducer'
import SearchBookReducer from './SearchBookDetailReducer'
import ProfilePublicReducer from './ProfilePublicReducer'

const combined = combineReducers({
    HomeReducer,
    SignUpReducer,
    SignInReducer,
    SearchBarReducer,
    SearchStoryReducer,
    SearchBookReducer,
    ProfilePublicReducer,
})

export default combined;