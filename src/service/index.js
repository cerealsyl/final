let users = '/api/users'
let login = '/api/login'
let user = '/api/users/USER_ID'
let books = '/api/users/USER_ID/books'
let book = '/api/users/USER_ID/books/BOOK_ID'
let stories = '/api/users/USER_ID/stories'
let story = '/api/stories/STORY_ID'
let userStory = '/api/users/USER_ID/stories/STORY_ID'



export default class Service {

    findAllUsers = () => {
        return fetch(users)
            .then(function (response) {
                return response.json();

            })

    };

    validateUser = (username, password) => {
        return fetch(login, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type' : 'application/json'
            }
        })


    };

    createUser = (user) => {
        return fetch(users, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })

    };

    findUserByUsername = (username) => {
        return fetch(username.replace("USERNAME", username))
            .then(response => {
            return response.json();
            })
    };

    searchShortStory = (keyword) => {
        return fetch(stories, {
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
        return fetch(story.replace("STORY_ID", storyId))
            .then(response => {
                return response.json()
            })


    }

    updateUserById = (userId, newUser) => {
        return fetch(user.replace("USER_ID", userId), {
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
    addBookToList = (userId, title) => {
        return fetch(books.replace("USER_ID", userId), {
            method: "POST",
            body: JSON.stringify(title),
            headers: {
                'content-type': 'application/json'
            }
        })


    }

    findAllBooksByUserId = (userId) => {
        return fetch(books.replace("USER_ID", userId))
            .then(response => {
                return response.json()
            })
    }

    deleteBookById = (userId, bookId) => {
        let temp = book.replace("USER_ID", userId)
        temp = temp.replace("BOOK_ID", bookId)
        return fetch(temp, {
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

        return fetch(stories.replace("USER_ID", userId))
            .then(response => {
                // console.log("response", response.json())
                return response.json()
            })

    }

    updateStoryById = (storyId, newStory) => {
        return fetch(story.replace("STORY_ID", storyId), {
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

        return fetch(temp, {
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




}





// export default class Service {
//     static myInstance = null;
//
//     users = [
//         {
//             id: '123',
//             username: 'dan',
//             password: 'dan',
//             email: 'dan@gmail.com'
//         },
//         {
//             id: '234',
//             username: 'siyang',
//             password: 'siyang',
//             email: 'siyang@gmail.com'
//         },
//         {
//             id: '345',
//             username: 'heather',
//             password: 'heather',
//             email: 'heather@gmail.com'
//         }
//     ]
//
//     static getInstance() {
//         if(Service.myInstance == null) {
//             Service.myInstance = new Service();
//         }
//         return this.myInstance
//     }
//
//     createUser = user => {
//         this.users.push(user)
//         return this.users
//     }
//
//     findAllUsers = () => {
//         return this.users
//     }
//
//     validateUser = (email, password) => {
//         console.log(email, password)
//
//         const targetUser = this.users.find(user => user.email === email)
//         if(targetUser.password === password) {
//             return true
//         }else{
//             return false
//         }
//
//     }
// }