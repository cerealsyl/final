const initialState = {shortStory: []}

const SearchBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH_STORY_FULFILLED":
            console.log(action.data)
            return {shortStory: action.data}
        default:
            return state
    }
}
export default SearchBarReducer