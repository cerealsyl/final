import { connect } from 'react-redux'
import UserProfile from '../component/UserProfile'
import Service from '../service'

const service = new Service();

// once it is connected to the server, then it should be the user from SignInReducer

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

    },

    updateUser: (userId, newUser) => {
        dispatch({
            type: "UPDATE_USER_PENDING"
        })
        service.updateUserById(userId, newUser)
            .then(json => {
                dispatch({
                    type: "UPDATE_USER_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "UPDATE_USER)REJECTED",
                    err: err
                })
            })
    },

    // updateStory

})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserProfile);