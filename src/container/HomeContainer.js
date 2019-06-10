import { connect } from 'react-redux'
import Home from "../component/Home";


const stateToPropertyMapper = (state) =>  ({
    loggedInFail: state.SignInReducer.loggedInFail,
    user: state.SignInReducer.user

});

const dispatchToPropertyMapper = (dispatch) => ({


});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(Home)