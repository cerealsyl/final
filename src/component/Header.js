import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="row">
                <div className="col-8 float-left">
                    <div className="color-black">
                        <Link to="/">
                            <h2>Bookie</h2>
                        </Link>

                    </div>
                </div>
                <div className="col-4 float-right">
                    <div className="row">

                        <div className={`${window.location.pathname === '/profile' ? "invisible" : "visible"} mt-2 btn btn-success col-3`}>
                            <Link to="/sign-in" className="color-white">Sign In</Link>
                        </div>
                        <div className={`${window.location.pathname === '/profile' ? "invisible" : "visible"} mt-2 ml-2 btn btn-success col-3 color-white`}>
                            <Link to="/register" className="color-white">Sign up</Link>
                        </div>
                        <div className={`${window.location.pathname === '/profile' ? "visible" : "invisible"} mt-2 btn btn-success col-3 color-white`}>
                            <Link to="/" className="color-white">Log out</Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)