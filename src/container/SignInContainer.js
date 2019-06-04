import { connect } from 'react-redux'
import SignIn from "../component/SignIn";

const stateToPropertyMapper = (state) => ({
    users: state.SignInReducer.users,
    message: state.SignInReducer.message

});

const dispatchToPropertyMapper = (dispatch) => ({
    validateUser: (email, password) => {
        dispatch({
            type: "VALIDATE_USER",
            email: email,
            password: password
        })
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignIn)