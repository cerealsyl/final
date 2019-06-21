let URL = "https://hidden-earth-39973.herokuapp.com"
// let URL = "http://localhost:8080"
let users = '/api/users'
let login = '/api/login'
let user = '/api/users/USER_ID'
let books = '/api/users/USER_ID/books'
let book = '/api/users/USER_ID/books/BOOK_ID'
let stories = '/api/users/USER_ID/stories'
let story = '/api/stories/STORY_ID'
let userStory = '/api/users/USER_ID/stories/STORY_ID'
let userBook = '/api/books/BOOK_TITLE/users'

let proxyUrl = 'https://secure-garden-16347.herokuapp.com/'
let BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'



export default class Service {


    validateUser = (username, password) => {
        return fetch(URL+ login, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type' : 'application/json'
            }
        })


    };

    fetchBooks = (keyword) => {
        return fetch((proxyUrl + BASE_URL + keyword), {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET'
            }
        })
            .then(response => response.json())
    }

    createUser = (user) => {
        return fetch(URL+ users, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })

    };

    findUserById = (userId) => {
        return fetch(URL+ user.replace("USER_ID", userId))
            .then(response => {
                return response
            })
    };

    searchStory = (keyword) => {
        return fetch(URL + "/api/stories", {
            method: "POST",
            body: JSON.stringify(keyword),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })
    }
    findStoryById = (storyId) => {
        return fetch(URL+ story.replace("STORY_ID", storyId))
            .then(response => {
                return response
            })


    }

    updateUserById = (userId, newUser) => {
        return fetch(URL+ user.replace("USER_ID", userId), {
            method: "PUT",
            body: JSON.stringify(newUser),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })

    }
    addBookToList = (userId, newBook) => {
        return fetch(URL+ books.replace("USER_ID", userId), {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                'content-type': 'application/json'
            }
        })


    }

    findAllBooksByUserId = (userId) => {
        return fetch(URL+ books.replace("USER_ID", userId))
            .then(response => {
                return response.json()
            })
    }

    deleteBookById = (userId, bookId) => {
        let temp = book.replace("USER_ID", userId)
        temp = temp.replace("BOOK_ID", bookId)
        return fetch(URL+ temp, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })

    }

    findAllStoriesByUserId = (userId) => {

        return fetch(URL+ stories.replace("USER_ID", userId))
            .then(response => {
                // console.log("response", response.json())
                return response.json()
            })

    }

    updateStoryById = (storyId, newStory) => {
        return fetch(URL+ story.replace("STORY_ID", storyId), {
            method: "PUT",
            body: JSON.stringify(newStory),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })
    }

    deleteStoryById = (userId, storyId) => {
        let temp = userStory.replace("USER_ID", userId);
        temp = temp.replace("STORY_ID", storyId);

        return fetch(URL+ temp, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                // console.log("response", response.json())
                return response.json()
            })
    }

    findAllUsersByBookTitle = (title) => {
        return fetch(URL+ userBook.replace("BOOK_TITLE", title))
            .then(response => {
                return response.json()
            })

    }

    createStory = (userId, newStory) =>{

        return fetch(URL+ stories.replace("USER_ID", userId), {
            method: "POST",
            body: JSON.stringify(newStory),
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(response => {
                return response.json()
            })
    }




}




