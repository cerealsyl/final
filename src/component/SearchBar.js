import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            books: []
        }
    }

    keywordChanged = event =>
        this.setState({keyword: event.target.value})

    proxyUrl = 'https://secure-garden-16347.herokuapp.com/'
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

    searchBooks = () =>
        fetch((this.proxyUrl + this.BASE_URL + this.state.keyword),  {
            // mode: 'no-cors',
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'POST, GET'
            }
        })
            .then(response => response.json())
            .then(response => this.renderBooks(response))


    renderBooks = (response) =>
        this.setState({books: response.items})

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                        <input
                            value={this.state.keyword}
                            onChange={this.keywordChanged}
                            className="col-8 form-control mt-350"
                            type="text"
                            placeholder="search your favorite authors, books...."/>
                        <button
                            onClick={this.searchBooks}
                            className="col-2 btn btn-outline-success ml-3 mt-350">
                            Search
                        </button>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    {this.state.books &&
                    <div className="col-5 mt-5">

                        <ul className="list-group">
                            {
                                this.state.books.map(
                                    (book,index) =>
                                        <li key={index}
                                            className='list-group-item'>
                                            <Link to={`/search/${book.id}`}>{book.volumeInfo.title}</Link>
                                        </li>
                                )
                            }
                        </ul>

                    </div>}


                </div>

            </div>
        )
    }

}

export default SearchBar