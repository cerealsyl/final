import { connect } from 'react-redux'
import SignUp from '../component/SignUp'

import Service from '../service'

const service = new Service();


const stateToPropertyMapper = (state) => console.log(state.SignUpReducer.message) || ({
    message: state.SignUpReducer.message

});

const dispatchToPropertyMapper = (dispatch) => ({
    register: (user) => {
        dispatch({
            type: "REGISTER_USER_PENDING",
            user: user
        });
        service.createUser(user)
            .then(message => {
                dispatch({
                    type: "REGISTER_USER_FULFILLED",
                    message: message
                })
            })
            .catch(err => {
                dispatch({
                    type: "REGISTER_USER_REJECTED",
                    err: err
                })
            })
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignUp)
