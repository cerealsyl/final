const HomeReducer = (state = {lessons: null}, action) => {
    switch (action.type) {
        case "FIND_ALL_LESSONS_FULFILLED":
        case "CREATE_LESSON_FULFILLED":
        case "DELETE_LESSON_FULFILLED":
        case "UPDATE_LESSON_FULFILLED":
            console.log(action.data)
            return {lessons: action.data}
        case "FIND_ALL_LESSONS_REJECTED":
        case "CREATE_LESSON_REJECTED":
        case "DELETE_LESSON_REJECTED":
        case "UPDATE_LESSON_REJECTED":
            console.log(`Action Rejected. Here is the error message: ${action.err}`);
            return state;
        default:
            return state
    }
}

export default HomeReducer