import { connect } from 'react-redux'
import SignUp from '../component/SignUp'

import Service from '../service'

const service = new Service();


const stateToPropertyMapper = (state) => ({
    fail: state.SignUpReducer.fail,
    success: state.SignUpReducer.success

});

const dispatchToPropertyMapper = (dispatch) => ({
    register: (user) => {
        dispatch({
            type: "REGISTER_USER_PENDING",
            user: user
        });
        service.createUser(user)
            .then(response => {
                if (!response.ok) throw new Error()
                dispatch({
                    type: "REGISTER_USER_FULFILLED",
                })
            })
            .catch(err => {
                dispatch({
                    type: "REGISTER_USER_REJECTED",
                })
            })
    },
    reset: () => {
        dispatch({
            type: "RESET_REGISTER_USER"
        })
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignUp)
