import { connect } from 'react-redux'
import SignUp from '../component/SignUp'


const stateToPropertyMapper = (state) => ({

});

const dispatchToPropertyMapper = (dispatch) => ({
    userSignUpRequest: (userData) => {
        dispatch({
            type: "USER_SIGN_UP"
        })
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignUp)
