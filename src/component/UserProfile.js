import React from 'react'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let display = ''
        if(display) {
            return (
                <div className="login-page">
                    <div>
                        <h3>user name</h3>
                    </div>
                    <h4 className="mt-3">Book list: </h4>
                    <div>
                        <ul className="list-group">

                            <li className="list-group-item text-center">
                                hey
                            </li>


                            <li className="list-group-item text-center">
                                hey
                            </li>


                        </ul>
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    widgets
                </div>
            )
        }

    }

}

export default UserProfile

