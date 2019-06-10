import { connect } from 'react-redux'
import SearchStoryDetail from "../component/SearchStoryDetail";
import Service from '../service'

const service = new Service();

const stateToProperty = (state) => ({

})

const dispatchToProperty = (dispatch) => ({
    findStoryById: (storyId) => {
        dispatch({
            type: "FIND_STORY_PENDING"
        })
        service.findStoryById(storyId)
            .then(response => {
                if(!response.ok) throw new Error()
                dispatch({
                    type: "FIND_STORY_PENDING",
                })
                return response.json()
            })
            .then(json => {
                dispatch({
                    type: "FIND_STORY_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_STORY_REJECTED"
                })
            })

    }

})

export default connect(stateToProperty, dispatchToProperty)(SearchStoryDetail)