import { connect } from 'react-redux'
import UserProfilePublic from "../component/UserProfilePublic";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => ({
    books: state.ProfilePublicReducer.books,
    user: state.ProfilePublicReducer.user,
    message: state.ProfilePublicReducer.message
})

const dispatchToProperty = (dispatch) => ({
    findAllBooksByUserId: (userId) => {
        dispatch({
            type: "FIND_ALL_BOOKS_BY_USER_ID_PENDING"
        })
        service.findAllBooksByUserId(userId)
            .then(json => {
                dispatch({
                    type: "FIND_ALL_BOOKS_BY_USER_ID_FULFILLED",
                    data: json
                })
            })
            .catch(err =>{
                dispatch({
                    type: "FIND_ALL_BOOKS_BY_USER_ID_REJECTED",
                    err: err
                })

            })
    },
    findUserById: (userId) => {
        dispatch({
            type: "FIND_USER_BY_ID_PENDING"
        })
        service.findUserById(userId)
            .then(response => {
                if (!response.ok) throw new Error()
                dispatch({
                    type: "FIND_USER_BY_ID_PENDING",
                })
                return response.json()
            })
            .then(json => {
                dispatch({
                    type:"FIND_USER_BY_ID_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_USER_BY_ID_REJECTED",
                    err: err
                })
            })
    }




})

export default connect(stateToProperty, dispatchToProperty)(UserProfilePublic)