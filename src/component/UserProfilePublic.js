import React from 'react'
import BookListItem from "./BookListItem";

class UserProfilePublic extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                    <h4 className="text-center">Username display</h4>
                    {this.props.user.bookList.map((book, index) =>
                        <BookListItem
                            book={book}
                            key={index}/>
                    )}
                    </div>
                    <div className="col-3"></div>


                </div>


            </div>
        )
    }
}

export default UserProfilePublic