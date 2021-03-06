import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }


    logout = () => {
        this.props.logout()
        setTimeout(()=> this.props.history.push(`/`), 100);
    }
    render() {

        let display = ""
        if (window.location.pathname !== '/myprofile' && this.props.user === null) {
            display =
                <div className="row">
                    <Link to="/login" className="mt-2 btn btn-success col-3 color-white">Sign In</Link>
                    <Link to="/register" className="mt-2 ml-2 btn btn-success col-3 color-white">Sign up</Link>
                </div>
        } else if (this.props.user !== null) {
            display =
                <div className="row">
                    <Link to="/myprofile" className="color-white mt-2 btn btn-success col-3">My Profile</Link>
                    <div
                        onClick={this.logout}
                        className="mt-2 ml-2 btn btn-warning col-3 color-white">
                        Log out</div>
                </div>

        }


        return (
            <div className="row">
                <div className="col-8 float-left">
                    <div className="color-black">
                        <Link to="/">
                            <h2 className="color-black mt-2 ml-2">Bookie</h2>
                        </Link>

                    </div>
                </div>
                <div className="col-4 float-right">

                    {display}

                </div>
            </div>
        )
    }
}

export default withRouter(Header)