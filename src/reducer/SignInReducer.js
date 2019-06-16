
const initialState = {user: null, loggedIn: null, loggedInFail: null, booklist: [], stories: []}


const SignInReducer = (state = initialState, action) => {
    switch(action.type) {
        case "VALIDATE_USER_FULFILLED":
            return {user: action.user, loggedIn: true, loggedInFail: false, booklist: [], stories: []}
        case "VALIDATE_USER_REJECTED":
            return {user: state.user, loggedIn: null, loggedInFail: true, booklist: [], stories: []}
        case "UPDATE_USER_FULFILLED":
            return {user: action.data, loggedIn: true, loggedInFail: state.loggedInFail, booklist: state.booklist, stories: state.stories};
        case "LOG_OUT":
            return initialState
        case "FIND_BOOKS_BY_USER_ID_FULFILLED":
        case "DELETE_BOOK_ITEM_FULFILLED":
            return {user: state.user, loggedIn: true, loggedInFail: state.loggedInFail, booklist: action.data, stories: []}
        case "FIND_STORIES_BY_USER_ID_FULFILLED":
        case "UPDATE_STORY_FULFILLED":
        case "CREATE_STORY_FULFILLED":
        case "DELETE_STORY_BY_ID_FULFILLED":
            return {user: state.user, loggedIn: true, loggedInFail: state.loggedInFail, booklist: state.booklist, stories: action.data}
        case "FIND_BOOKS_BY_USER_ID_PENDING":
        case "DELETE_STORY_BY_ID_PENDING":
        case "DELETE_STORY_BY_ID_REJECTED":
        case "UPDATE_STORY_PENDING":
        case "UPDATE_STORY_REJECTED":
        case "FIND_STORIES_BY_USER_ID_PENDING":
        case "FIND_USER_BY_USERNAME_REJECTED":
        case "DELETE_BOOK_ITEM_REJECTED":
        default:
            return state
    }
}

export default SignInReducer