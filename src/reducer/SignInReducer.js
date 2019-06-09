
const initialState = {user: null, loggedIn: null, loggedInFail: null}


const SignInReducer = (state = initialState, action) => {
    switch(action.type) {
        case "VALIDATE_USER_FULFILLED":
            return {user: action.user, loggedIn: true, loggedInFail: state.loggedInFail}
        case "VALIDATE_USER_REJECTED":
            return {user: state.user, loggedIn: null, loggedInFail: true}
            // if(message === true) {
            //     const newLoggedInFail = false
            //     return {users: state.users, loggedInFail: newLoggedInFail}
            // }else{
            //     console.log("there")
            //     return {users: state.users, loggedInFail: true}
            // }


        default:
            return state
    }
}

export default SignInReducer