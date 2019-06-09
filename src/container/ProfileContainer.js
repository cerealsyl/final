import { connect } from 'react-redux'
import UserProfile from '../component/UserProfile'
import Service from '../service'

const service = new Service();

const stateToPropertyMapper = (state) => ({
    loggedInFail: state.SignInReducer.loggedInFail,
    user: state.profileReducer.user
})

const dispatchToPropertyMapper = (dispatch) => ({
    findUserByUsername: (username) => {
        dispatch({
            type: "FIND_USER_BY_USERNAME_PENDING"
        })
        service.findUserByUsername(username)
            .then(json => {
                dispatch({
                    type: "FIND_USER_BY_USERNAME_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_USER_BY_USERNAME_REJECTED",
                    err: err
                })
            })

    }

})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserProfile);