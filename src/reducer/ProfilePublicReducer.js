const initialState = {books: [], user: null, message: ""}


const ProfilePublicReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_ALL_BOOKS_BY_USER_ID_FULFILLED":
            return {books: action.data, user: state.user, message: ""}
        case "FIND_USER_BY_ID_FULFILLED":
            return {books: state.books, user: action.data, message: ""}
        case "FIND_USER_BY_ID_REJECTED":
            return {books: state.books, user: state.user, message: "User Not Found"}
        case "IND_ALL_BOOKS_BY_USER_ID_REJECTED":
        default:
            return state;

    }
}

export default ProfilePublicReducer