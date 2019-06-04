import { connect } from 'react-redux'
import Home from "../component/Home";


const stateToPropertyMapper = (state) => ({

});

const dispatchToPropertyMapper = (dispatch) => ({
    signIn: (name, password, email, userType) => {
        dispatch({
            type: "REGISTER_PENDING",
            name: name,
            password: password,
            email: email,
            userType: userType
        });
    }

});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(Home)