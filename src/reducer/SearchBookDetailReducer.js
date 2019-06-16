

const initialState = {response: null, users: []}

const SearchBookDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_BOOK_TO_LIST_FULFILLED":
            return {response: "true", users: state.users}
        case "FIND_USERS_BY_BOOK_ID_FULFILLED":
            return {response: state.response, users: action.data}
        case "ADD_BOOK_TO_LIST_REJECTED":
            return {response: "false", users: state.users}
        default:
            return state
    }
}

export default SearchBookDetailReducer