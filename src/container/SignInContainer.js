import { connect } from 'react-redux'
import SignIn from "../component/SignIn";

const stateToPropertyMapper = (state) => ({
    user: state.SignInReducer.users,
    loggedInFail: state.SignInReducer.loggedInFail


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