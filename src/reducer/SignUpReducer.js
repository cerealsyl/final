import Service from '../service'

let service = Service.getInstance();
const users = service.findAllUsers();

const SignUpReducer = (state = {users: users}, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default SignUpReducer