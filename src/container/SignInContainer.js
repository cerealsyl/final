import { connect } from 'react-redux'
import SignIn from "../component/SignIn";

const stateToPropertyMapper = (state) => ({

});

const dispatchToPropertyMapper = (dispatch) => ({
    signIn: (name, password, email, userType) => {
        dispatch({
            type: "REGISTER_PENDING",
            name: name,
            password: password,
            email: email,
            userType: userType
        });
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignIn)