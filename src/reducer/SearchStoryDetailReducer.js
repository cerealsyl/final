const initialState = {story: null, message: ""}

const SearchStoryDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_STORY_FULFILLED":
            return {story: action.data, message: state.message}
        case "FIND_STORY_REJECTED":
            return {story: state.story, message: "Story not found"}
        default:
            return state
    }
}

export default SearchStoryDetailReducer