import { connect } from 'react-redux'
import SignIn from "../component/SignIn";
import Service from "../service";

const service = new Service();

const stateToPropertyMapper = (state) => console.log("signin", state.SignInReducer) || ({
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
                    type: "VALIDATE_USER_PENDING",
                })
                return response.json()
            })
            .then(json => {
                dispatch({
                    type: "VALIDATE_USER_FULFILLED",
                    user: json
                })
        })

            .catch(err => {
                dispatch({
                    type: "VALIDATE_USER_REJECTED"
                })
            })
    },

    findAllBooksByUserId: (userId) => {
        dispatch({
            type: "FIND_BOOKS_BY_USER_ID_PENDING"
        })
        service.findAllBooksByUserId(userId)
            .then(json => {
                dispatch({
                    type: "FIND_BOOKS_BY_USER_ID_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_BOOKS_BY_USER_ID_REJECTED",
                    err: err

                })
            })

    },

    findAllStoriesByUserId: (userId) => {
        dispatch({
            type: "FIND_STORIES_BY_USER_ID_PENDING"
        })
        service.findAllStoriesByUserId(userId)
            .then(json => {
                dispatch({
                    type: "FIND_STORIES_BY_USER_ID_FULFILLED",
                    data: json
            })
        })
            .catch(err => {
                dispatch({
                    type: "FIND_STORIES_BY_USER_ID_REJECTED",
                    err: err
                })
            })
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(SignIn)