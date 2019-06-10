import React from 'react'

class BookListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-8">
                            {this.props.book.title}
                        </div>
                        <div className="col-2">
                            <button className={`btn btn-danger ${window.location.pathname === '/myprofile'? "visible" : "invisible"}`}>
                                Delete
                            </button>
                        </div>
                    </div>
                </li>
            </div>
        )
    }

}

export default BookListItem