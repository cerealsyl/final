import { connect } from 'react-redux'
import SearchBar from "../component/SearchBar";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => console.log(state.SearchBarReducer.shortStory) || ({
    story: state.SearchBarReducer.shortStory

})

const dispatchToProperty = (dispatch) => ({
    searchShortStory: (keyword) => {
        dispatch({
            type: "SEARCH_STORY_PENDING"
        })
        service.searchShortStory(keyword)
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

    }


})

export default connect(stateToProperty, dispatchToProperty)(SearchBar)

