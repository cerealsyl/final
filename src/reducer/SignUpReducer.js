import Service from '../service'

let service = Service.getInstance();
const users = service.findAllUsers();

const SignUpReducer = (state = {users: users}, action) => {
    switch(action.type) {
        case "REGISTER_USER":
            const newState = service.createUser(action.user);
            console.log(newState)
            return {users: newState}

        default:
            return state
    }
}

export default SignUpReducer