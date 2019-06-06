import Service from '../service'



const SignInReducer = (state = {users: [], loggedInFail: false}, action) => {
    switch(action.type) {
        // case "VALIDATE_USER":
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