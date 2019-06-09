import { connect } from 'react-redux'
import UserProfilePublic from "../component/UserProfilePublic";

const stateToProperty = (state) => ({
    user: state.profileReducer.user
})

const dispatchToProperty = (dispatch) => ({

})

export default connect(stateToProperty, dispatchToProperty)(UserProfilePublic)