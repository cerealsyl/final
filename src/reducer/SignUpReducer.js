

const initialState = {success: null, fail: null}

const SignUpReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case "REGISTER_USER_FULFILLED":
            return {success: "success", fail: state.fail}
        case "REGISTER_USER_REJECTED":
            console.log("rejected", state)
            return {success: state.success, fail: "Register fail, please try again."}
        case "RESET_REGISTER_USER":
            return initialState
        default:
            return state
    }
}

export default SignUpReducer