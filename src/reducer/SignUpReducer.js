

const SignUpReducer = (state = {message: null}, action) => {
    switch(action.type) {
        case "REGISTER_USER_FULFILLED":
            return {message: action.message}
        default:
            return state
    }
}

export default SignUpReducer