import { connect } from 'react-redux'
import SearchDetail from "../component/SearchDetail";

const stateToProperty = (state) => ({
    user: state.SignInReducer.user

})

const dispatchToProperty = (dispatch) => ({

})

export default connect(stateToProperty, dispatchToProperty)(SearchDetail)