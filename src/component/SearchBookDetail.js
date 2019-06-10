import React from 'react'
import { withRouter } from 'react-router-dom'

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

    searchBook = () =>
        fetch((this.proxyUrl+ this.BASE_URL + this.bookId),  {
            // mode: 'no-cors',
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'POST, GET'
            }
        })
            .then(response => response.json())
            .then(response => this.renderBook(response))

    renderBook = (response) =>
        // {console.log(response)}
        this.setState({book: response})

    addBookToList = () => {
        if(!this.props.user) {
            this.props.history.push('/sign-in')
        }else{
            this.props.addBookToList(this.props.user.id, this.state.book.volumeInfo.title)
        }

    }



    render() {
        if(typeof(this.state.book) === 'undefined') return <div>Loading book details....</div>;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div>
                        <img src={this.state.book.volumeInfo.imageLinks.small} alt='image not found'/>
                        </div>
                        <div className="row">
                            <button onClick={this.addBookToList} className="mt-3 btn btn-info col-5">
                                Add to Booklist
                            </button>
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
                        <ul className="mt-3 list-group">
                            <h4>Bookies that saved this book: </h4>
                            <li className="list-group-item border-0">
                                sylvia tang
                            </li>
                            <li className="list-group-item border-0">
                                Yizong hu
                            </li>
                            <li className="list-group-item border-0">
                               Shujing Chen
                            </li>
                            <li className="list-group-item border-0">
                                Shiqing Dong
                            </li>

                        </ul>
                    </div>


                </div>
                </div>

        )
    }
}

export default withRouter(SearchBookDetail)