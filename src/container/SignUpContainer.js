import { connect } from 'react-redux'
import SignUp from '../component/SignUp'


const stateToPropertyMapper = (state) => ({
    users: state.SignUpReducer.users

});

const dispatchToPropertyMapper = (dispatch) => ({
    register: (user) => {
        dispatch({
            type: "REGISTER_USER",
            user: user
        })
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignUp)
