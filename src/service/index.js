let users = '/api/users'
let login = '/api/login'
let username = '/api/users/USERNAME'
let stories = '/api/shortstory'
let story = '/api/shortstory/STORY_ID'





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