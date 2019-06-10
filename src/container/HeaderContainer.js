import { connect } from 'react-redux'
import Header from '../component/Header'

const stateToProperty = (state) => ({

})

const dispatchToProperty = (dispatch) => ({
    logout: () => {
        dispatch({
            type: "LOG_OUT"
        })
    }

})

export default connect(stateToProperty, dispatchToProperty)(Header)
