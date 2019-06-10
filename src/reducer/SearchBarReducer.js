const initialState = {stories: []}

const SearchBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH_STORY_FULFILLED":
            console.log("data", action.data)
            return {stories: action.data}
        default:
            return state
    }
}
export default SearchBarReducer