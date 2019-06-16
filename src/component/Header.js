import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let display = ""
        if (window.location.pathname !== '/myprofile' && this.props.user === null) {
            display =
                <div className="row">
                    <div className={`mt-2 btn btn-success col-3`}>
                        <Link to="/sign-in" className="color-white">Sign In</Link>
                    </div>
                    <div className={`mt-2 ml-2 btn btn-success col-3 color-white`}>
                        <Link to="/register" className="color-white">Sign up</Link>
                    </div>
                </div>
        } else if (this.props.user !== null) {
            display =
                <div className="row">
                    <div className={`mt-2 btn btn-success col-3`}>
                        <Link to="/myprofile" className="color-white">My Profile</Link>
                    </div>
                    <div onClick={this.props.logout}
                         className={`mt-2 ml-2 btn btn-warning col-3 color-white`}>
                        <Link to="/" className="color-white">Log out</Link>
                    </div>
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
                        {/*<div*/}
                        {/*    className={`${this.props.user !== null ? "visible" : "invisible"} mt-2 btn btn-success col-2`}>*/}
                        {/*    <Link to="/myprofile" className="color-white">My Profile</Link>*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={`${window.location.pathname === '/myprofile' ? "invisible" : "visible"} mt-2 btn btn-success col-2`}>*/}
                        {/*    <Link to="/sign-in" className="color-white">Sign In</Link>*/}
                        {/*</div>*/}
                        {/*<div*/}
                        {/*    className={`${window.location.pathname === '/myprofile' ? "invisible" : "visible"} mt-2 ml-2 btn btn-success col-2 color-white`}>*/}
                        {/*    <Link to="/register" className="color-white">Sign up</Link>*/}
                        {/*</div>*/}
                        {/*<div onClick={this.props.logout}*/}
                        {/*     className={`${window.location.pathname === '/myprofile' ? "visible" : "invisible"} mt-2 btn btn-warning col-2 color-white`}>*/}
                        {/*    <Link to="/" className="color-white">Log out</Link>*/}
                        {/*</div>*/}


                </div>
            </div>
        )
    }
}

export default withRouter(Header)