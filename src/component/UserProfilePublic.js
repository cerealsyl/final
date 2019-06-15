import React from 'react'
import { withRouter } from 'react-router-dom'
import BookListItem from "./BookListItem";

class UserProfilePublic extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.findUserById(this.props.match.params.userId)
        this.props.findAllBooksByUserId(this.props.match.params.userId)

    }

    render() {
        if (this.props.message !== "") {
            return (
                <div>
                    <h3 className="mt-5">
                        {this.props.message}
                    </h3>
                </div>
            )
        } else {
            if (this.props.user && this.props.books.length === 0) {
                return (
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <h4 className="text-center">{this.props.user.username}'s Book List</h4>
                                <h5>Current users has no saved any book yet.</h5>
                            </div>
                            <div className="col-3"></div>


                        </div>


                    </div>
                )

            } else if (this.props.user && this.props.books.length !== 0){
                return (
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <h4 className="text-center">{this.props.user.username}'s Book List</h4>

                                {this.props.books.map((book, index) =>
                                    <BookListItem
                                        book={book}
                                        key={index}/>
                                )}
                            </div>
                            <div className="col-3"></div>


                        </div>


                    </div>
                )
            }else{
                return (
                    <div className="text-center">Loading...</div>
                )
            }
        }
    }
}

export default withRouter(UserProfilePublic)