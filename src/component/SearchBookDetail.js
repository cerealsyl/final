import React from 'react'
import {Link, withRouter} from 'react-router-dom'


class SearchBookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.bookId = props.match.params.bookId
        this.searchBook()
        this.state = {
            book: undefined
        }
    }
    proxyUrl = 'https://secure-garden-16347.herokuapp.com/'
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes/'

    searchBook = () => {
        fetch((this.proxyUrl + this.BASE_URL + this.bookId), {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET'
            }
        })
            .then(response => response.json())
            .then(response => this.renderBook(response))
    }

    renderBook = (response) => {
        this.setState({book: response})
        this.props.findAllUsersByBookTitle(this.state.book.volumeInfo.title)
    }

    addBookToList = () => {
        if(!this.props.user) {
            this.props.history.push('/sign-in')
        }else{
            const newBook = {
                title: this.state.book.volumeInfo.title
            }

            this.props.addBookToList(this.props.user.id, newBook)
        }

    }





    render() {
        if(typeof(this.state.book) === 'undefined') return <div>Loading book details....</div>;


        let display = "";
        if(this.props.response === "true") {
            display = <div className="alert alert-success" role="alert">
                Successfully saved the book to your list!
            </div>
        }else if(this.props.response === "false") {
            display = <div className="alert alert-warning" role="alert">
                You have already saved this book!
            </div>
        }


        let users = ""
        if(this.props.users.length === 0) {
            users = <div className="mt-2">This book has not been saved to any booklist yet.</div>
        }else {
            users =
                <ul className="list-group mt-2 text-center">
                    {
                        this.props.users.map(
                            (user, index) =>
                                <li key={index}
                                    className='list-group-item'>
                                    <Link to={`/profile/${user.id}`}>{user.username}</Link>
                                </li>
                        )
                    }
                </ul>
        }

        let button = ""
        if(!this.props.user || this.props.user.role === "VIEWER") {
            button = <button
                onClick={this.addBookToList}
                className={`mt-3 btn btn-info col-5`}>
                Add to Booklist
            </button>
        }else{
            button = <div></div>
        }

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        {display}
                        <div>
                        <img src={this.state.book.volumeInfo.imageLinks.small} alt='image not found'/>
                        </div>
                        <div className="row">
                            {/*<button*/}
                            {/*    onClick={this.addBookToList}*/}
                            {/*    className={`${this.state.user.role === "WRITER"? "invisible" : "visible"}mt-3 btn btn-info col-5`}>*/}
                            {/*    Add to Booklist*/}
                            {/*</button>*/}
                            {button}
                            <div className="col-2"></div>
                                <a className="col-5 mt-4" href={this.state.book.accessInfo.webReaderLink}>Read Online</a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7 ">
                        <ul className="list-group">

                            <li className="list-group-item border-0"></li>
                            <div>Title: </div>
                            <li className="list-group-item border-0">

                                {this.state.book.volumeInfo.title}

                            </li>
                            <li className="list-group-item border-0"></li>
                            <div>Author:  </div>
                            <li className="list-group-item border-0">

                                {this.state.book.volumeInfo.authors}

                            </li>
                            <li className="list-group-item border-0"></li>
                            <div>Categories:   </div>
                            <li className="list-group-item border-0">
                                {this.state.book.volumeInfo.categories}
                            </li>
                            <li className="list-group-item border-0"></li>

                        </ul>
                        <h4>Bookies that saved this book:</h4>
                        {users}
                    </div>


                </div>
                </div>

        )
    }
}

export default withRouter(SearchBookDetail)