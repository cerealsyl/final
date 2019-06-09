import { connect } from 'react-redux'
import SignIn from "../component/SignIn";
import Service from "../service";

const service = new Service();

const stateToPropertyMapper = (state) => ({
    user: state.SignInReducer.user,
    loggedIn: state.SignInReducer.loggedIn,
    loggedInFail: state.SignInReducer.loggedInFail


});

const dispatchToPropertyMapper = (dispatch) => ({
    validateUser: (username, password) => {
        dispatch({
            type: "VALIDATE_USER_PENDING",
        })
        service.validateUser(username, password)
            .then(response => {
                if(!response.ok) throw new Error()
                dispatch({
                    type: "VALIDATE_USER_FULFILLED",
                    user: response.json()
                })
            })
            .catch(err => {
                dispatch({
                    type: "VALIDATE_USER_REJECTED"
                })
            })



    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignIn)