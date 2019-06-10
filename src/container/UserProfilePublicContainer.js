import { connect } from 'react-redux'
import UserProfilePublic from "../component/UserProfilePublic";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => ({
    user: state.profileReducer.user
})

const dispatchToProperty = (dispatch) => ({
    addBookToList: (userId, bookId) =>{
        dispatch({
            type: "ADD_BOOK_TO_LIST_PENDING"
        })
        service.addBookToList(userId, bookId)
            .then(response => {
                dispatch({
                   type: "ADD_BOOK_TO_LIST_FULFILLED",
                   response: response
                })
            })
            .catch(err => {
                dispatch({
                    type: "ADD_BOOK_TO_LIST_REJECTED",
                    err: err
                })
            })

    }



})

export default connect(stateToProperty, dispatchToProperty)(UserProfilePublic)