
const initialState = {user: null, loggedIn: null, loggedInFail: null}


const SignInReducer = (state = initialState, action) => {
    switch(action.type) {
        case "VALIDATE_USER_FULFILLED":
            return {user: action.user, loggedIn: true, loggedInFail: state.loggedInFail}
        case "VALIDATE_USER_REJECTED":
            return {user: state.user, loggedIn: null, loggedInFail: true}

        default:
            return state
    }
}

export default SignInReducer