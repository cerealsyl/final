import { connect } from 'react-redux'
import SearchBookDetail from "../component/SearchBookDetail";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => ({
    user: state.SignInReducer.user

})

const dispatchToProperty = (dispatch) => ({
    addBookToList: (userId, title) =>{
        dispatch({
            type: "ADD_BOOK_TO_LIST_PENDING"
        })
        service.addBookToList(userId, title)
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

export default connect(stateToProperty, dispatchToProperty)(SearchBookDetail)