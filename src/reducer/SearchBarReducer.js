const initialState = {stories: [], message: null, books: []}

const SearchBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH_STORY_FULFILLED":
            console.log("data", action.data)
            return {stories: action.data, books: state.books, message: null}
        case "SEARCH_BOOKS_FULFILLED":
            return {stories: state.stories, books: action.data, message: null}
        case "SEARCH_STORY_PENDING":
        case "SEARCH_BOOKS_PENDING":
            return {stories: state.stories, books: state.books, message: "Searching..."}
        default:
            return state
    }
}
export default SearchBarReducer