

const user = {
    username : 'siyang',
    password : '9999',
    email: "siyang@gmail.com",
    firstname: "",
    lastname: "",
    userType: "VIEWER",
    bookList: [
        {
            title: "harry",
        },
        {
            title: "yooo",
        },
        {
            title: "hahhaha",
        },
        ]


}

const initialState = {user: user}


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_USER_BY_USERNAME_FULFILLED":
            return {user: action.data};
        case "FIND_USER_BY_USERNAME_REJECTED" :
        default:
            return state;

    }
}

export default profileReducer