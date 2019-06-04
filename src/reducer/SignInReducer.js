import Service from '../service'

let service = Service.getInstance();
const users = service.findAllUsers();

const SignInReducer = (state = {users: users, message: null}, action) => {
    switch(action.type) {
        case "VALIDATE_USER":
            console.log("in reducer")
            let message = service.validateUser(action.email, action.password);
            console.log(message)
            return {users: state.users, message: message}

        default:
            return state
    }
}

export default SignInReducer