import React from 'react'
import { Link } from 'react-router-dom'
class Result extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (

            <div className="login-page">
                <div>
                    <h4>
                        Search Results:
                    </h4>
                </div>
                <ul className="list-group">
                    <Link to="/details/{bookId}">
                    <li className="list-group-item text-center">
                        hey
                    </li>
                    </Link>

                    <Link to="/details/{bookId}">
                    <li className="list-group-item text-center">
                        hey
                    </li>
                    </Link>

                </ul>

            </div>
        )
    }
}

export default Result