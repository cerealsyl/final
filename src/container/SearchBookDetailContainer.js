import { connect } from 'react-redux'
import SearchBookDetail from "../component/SearchBookDetail";

const stateToProperty = (state) => ({
    user: state.SignInReducer.user

})

const dispatchToProperty = (dispatch) => ({

})

export default connect(stateToProperty, dispatchToProperty)(SearchBookDetail)