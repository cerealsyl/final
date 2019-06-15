import { connect } from 'react-redux'
import SearchBookDetail from "../component/SearchBookDetail";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => ({
    user: state.SignInReducer.user,
    response: state.SearchBookReducer.response,
    users: state.SearchBookReducer.users

})

const dispatchToProperty = (dispatch) => ({
    addBookToList: (userId, newBook) =>{
        dispatch({
            type: "ADD_BOOK_TO_LIST_PENDING"
        })
        service.addBookToList(userId, newBook)
            .then(response => {
                if(!response.ok) throw new Error()
                dispatch({
                    type: "ADD_BOOK_TO_LIST_FULFILLED",
                    data: response
                })
            })
            .catch(err => {
                dispatch({
                    type: "ADD_BOOK_TO_LIST_REJECTED",
                    err: err
                })
            })

    },

    findAllUsersByBookTitle: (title) => {
        dispatch({
            type: "FIND_USERS_BY_BOOK_ID_PENDING"
        })
        service.findAllUsersByBookTitle(title)
            .then(json => {
                dispatch({
                    type: "FIND_USERS_BY_BOOK_ID_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_USERS_BY_BOOK_ID_REJECTED",
                    err: err
                })
            })
    }

})

export default connect(stateToProperty, dispatchToProperty)(SearchBookDetail)