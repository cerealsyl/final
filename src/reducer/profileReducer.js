

const user = {
    id: 1,
    username : 'siyang',
    password : '9999',
    email: "siyang@gmail.com",
    firstname: "",
    lastname: "",
    userType: "WRITER",
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
    ],
    stories: [
        {
            title: "birds",
            story: "The voice cracks the alphabet. The playground appends the dying wrapper. " +
                "The cube ascends past the divorce! A framework accepts against his geometry! " +
                "Within the entitled prejudice burns a redundant raid."
        },
        {
            title: "bears",
            story: "Can the island triumph across an implied cupboard? A saga hardens without the supreme. " +
                "When will every weather scenery puzzle under the platform? A jack jungle hacks the frustrated " +
                "motorway. Another immature screen exchanges the baggage. How can the constituent minister bundle " +
                "the curriculum?"
        },
        {
            title: "ducks",
            story: "Throughout the muttering shoulder puzzles the internal backbone. The heterosexual bicycles! " +
                "The liaison pops beside the percentage! Under a rage mends the center wolf. Opposite the magnetic " +
                "copyright gossips an enthusiastic paste. The stranger bicycles!"
        }
    ]


}

const initialState = {user: user}


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_USER_BY_USERNAME_FULFILLED":
        case "UPDATE_USER_FULFILLED":
            return {user: action.data};
        case "LOG_OUT":
            return {user: null}
        case "FIND_USER_BY_USERNAME_REJECTED" :
        default:
            return state;

    }
}

export default profileReducer