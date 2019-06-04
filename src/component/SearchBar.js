import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container center">
                <div className="row">
                    <input
                        className="col-6 form-control"
                        type="text"
                        placeholder="search your favorite authors, books...."/>

                            <Link to="/search" className="col-6">
                                <button className="btn btn-outline-success ml-3">
                                    Search
                                </button>
                            </Link>

                </div>
            </div>
        )
    }

}

export default SearchBar