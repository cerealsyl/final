const initialState = {story: null}

const SearchStoryDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_STORY_FULFILLED":
            return {story: action.data}
        default:
            return state
    }
}

export default SearchStoryDetailReducer