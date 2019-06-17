import { connect } from 'react-redux'
import UserProfile from '../component/UserProfile'
import Service from '../service'

const service = new Service();


const stateToPropertyMapper = (state) => ({
    loggedInFail: state.SignInReducer.loggedInFail,
    user: state.SignInReducer.user,
    booklist: state.SignInReducer.booklist,
    stories: state.SignInReducer.stories
})

const dispatchToPropertyMapper = (dispatch) => ({
    findUserByUsername: (username) => {
        dispatch({
            type: "FIND_USER_BY_USERNAME_PENDING"
        })
        service.findUserByUsername(username)
            .then(json => {
                dispatch({
                    type: "FIND_USER_BY_USERNAME_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_USER_BY_USERNAME_REJECTED",
                    err: err
                })
            })

    },

    updateUser: (userId, newUser) => {
        dispatch({
            type: "UPDATE_USER_PENDING"
        })
        service.updateUserById(userId, newUser)
            .then(json => {
                dispatch({
                    type: "UPDATE_USER_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "UPDATE_USER)REJECTED",
                    err: err
                })
            })
    },

    deleteBookItem: (userId, bookId) => {
        dispatch({
            type: "DELETE_BOOK_ITEM_PENDING"
        })
        service.deleteBookById(userId, bookId)
            .then(json => {
                dispatch({
                    type: "DELETE_BOOK_ITEM_FULFILLED",
                    data: json
                })

            })
            .catch(err => {
                dispatch({
                    type: "DELETE_BOOK_ITEM_REJECTED",
                    err: err
                })
            })
    },

    updateStory: (storyId, newStory) => {
        dispatch({
            type: "UPDATE_STORY_PENDING"
        })
        service.updateStoryById(storyId, newStory)
            .then(json => {
                dispatch({
                    type: "UPDATE_STORY_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "UPDATE_STORY_REJECTED",
                    err: err
                })
            })
    },

    deleteStoryById: (userId, storyId) => {
        dispatch({
           type: "DELETE_STORY_BY_ID_PENDING"
        })
        service.deleteStoryById(userId, storyId)
            .then(json => {
                dispatch({
                    type: "DELETE_STORY_BY_ID_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "DELETE_STORY_BY_ID_REJECTED",
                    err: err
                })

            })
    },
    createStory: (userId, newStory) => {
        dispatch({
            type: "CREATE_STORY_PENDING"
        })
        service.createStory(userId, newStory)
            .then(json => {
                dispatch({
                    type: "CREATE_STORY_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "CREATE_STORY_REJECTED",
                    err: err
                })
            })

    },
    findAllBooksByUserId: (userId) => {
        dispatch({
            type: "FIND_BOOKS_BY_USER_ID_PENDING"
        })
        service.findAllBooksByUserId(userId)
            .then(json => {
                dispatch({
                    type: "FIND_BOOKS_BY_USER_ID_FULFILLED",
                    data: json
                })
            })
            .catch(err => {
                dispatch({
                    type: "FIND_BOOKS_BY_USER_ID_REJECTED",
                    err: err

                })
            })

    },


})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UserProfile);