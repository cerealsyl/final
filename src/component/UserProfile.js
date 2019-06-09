import React from 'react'
import {Link} from 'react-router-dom'
import WidgetListContainer from '../container/WidgetListContainer'


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        if (!this.props.user) {
            // button to sign in
            return <div className="row">
                <Link to='/sign-in'>
                    yuoooooooooooooooooo
                </Link>
            </div>

        } else {
            return (
                <div className="container">
                    <div className="row mt-5">

                        <div className="col-6">
                            <div className="row">
                                <div className="col-8">
                                <h4>User Information</h4>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-info">edit</button>
                                </div>

                            </div>
                                <div className="row">
                                    <div className="col-6">
                                        username
                                    </div>
                                    <div className="col-6">
                                        {this.props.user.username}
                                    </div>

                                </div>
                            <div className="row">
                                <div className="col-6">
                                    password
                                </div>
                                <div className="col-6">
                                    {this.props.user.password}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    email
                                </div>
                                <div className="col-6">
                                    {this.props.user.email}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    first name
                                </div>
                                <div className="col-6">
                                    {this.props.user.firstname}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    last name
                                </div>
                                <div className="col-6">
                                    {this.props.user.lastname}
                                </div>

                            </div>

                        </div>
                        {this.props.user.userType === "VIEWER" && <div className="col-6">
                            <h3>
                                Saved BookList:
                            </h3>
                            <ul className='list-group'>

                                {this.props.user.bookList.map((book, index) =>
                                    <li key={index} className='list-group-item'>
                                        {book.title}
                                    </li>
                                )}
                            </ul>
                        </div>}
                        {this.props.user.userType === "WRITER"&& <div className="col-6">
                            <h3>Writing Widget</h3>
                            {/*<WidgetListContainer/>*/}
                        </div>}




                    </div>
                </div>
            )


        }


        //     let display = ''
        //     if(display) {
        //         return (
        //             <div className="login-page">
        //                 <div>
        //                     <h3>user name</h3>
        //                 </div>
        //                 <h4 className="mt-3">Book list: </h4>
        //                 <div>
        //                     <ul className="list-group">
        //
        //                         <li className="list-group-item text-center">
        //                             hey
        //                         </li>
        //
        //
        //                         <li className="list-group-item text-center">
        //                             hey
        //                         </li>
        //
        //
        //                     </ul>
        //                 </div>
        //             </div>
        //
        //         )
        //     } else {
        //         return (
        //             <div>
        //                 widgets
        //             </div>
        //         )
        //     }
        //
        // }
    }
}

export default UserProfile

