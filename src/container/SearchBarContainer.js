import { connect } from 'react-redux'
import SearchBar from "../component/SearchBar";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => console.log(state.SearchBarReducer) ||({
    stories: state.SearchBarReducer.stories,
    books: state.SearchBarReducer.books,
    message: state.SearchBarReducer.message

})

const dispatchToProperty = (dispatch) => ({
    searchStory: (keyword) => {
        dispatch({
            type: "SEARCH_STORY_PENDING"
        })
        service.searchStory(keyword)
            .then(response =>{
                dispatch({
                    type: "SEARCH_STORY_FULFILLED",
                    data: response
                })
                }
            )
            .catch(err => {
                dispatch({
                    type: "SEARCH_STORY_REJECTED",
                    err: err
                })

            })

    },

    fetchBooks: (keyword) => {
        dispatch({
            type: "SEARCH_BOOKS_PENDING"
        })
        service.fetchBooks(keyword)
            .then(json => {
                dispatch({
                    type: "SEARCH_BOOKS_FULFILLED",
                    data: json.items
                })
            })
            .catch(err => {
                dispatch({
                    type: "SEARCH_BOOKS_REJECTED",
                    err: err
                })
            })
    }


})

export default connect(stateToProperty, dispatchToProperty)(SearchBar)

