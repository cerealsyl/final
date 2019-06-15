import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            searchType: "",
        }
    }


    keywordChanged = event =>
        this.setState({keyword: event.target.value})

    proxyUrl = 'https://secure-garden-16347.herokuapp.com/'
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'

    searchBooks = () => {
        this.setState({
            books: null,
            story: null
        })

        if(this.state.searchType) {
            if(this.state.searchType === "story") {
                return fetch("/api/stories", {
                    method: "POST",
                    body:JSON.stringify(this.state.keyword),
                    headers: {
                        'content-type' : 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(json => this.renderStories(json))

            }else {

                return fetch((this.proxyUrl + this.BASE_URL + this.state.keyword), {
                    // mode: 'no-cors',
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'POST, GET'
                    }
                })
                    .then(response => response.json())
                    .then(response => this.renderBooks(response))
            }
        }else{
            alert("Please choose a search type.")
        }


    }



    searchType = e => {
        this.setState({
            searchType: e.currentTarget.value
        })
    }

    renderBooks = (response) =>
        this.setState({books: response.items})

    renderStories = (json) =>
        this.setState({stories: json})

    render() {
        let display = ""

        if(this.state.books) {
            display =
                    <div className="col-5 mt-5">

                        <ul className="list-group">
                            {
                                this.state.books.map(
                                    (book,index) =>
                                        <li key={index}
                                            className='list-group-item'>
                                            <Link to={`/search/book/${book.id}`}>{book.volumeInfo.title}</Link>
                                        </li>
                                )
                            }
                        </ul>

                    </div>
        }else if(this.state.stories){
            display =
                <div className="col-5 mt-5">
                    <ul className="list-group">
                    {
                        this.state.stories.map(
                            (story,index) =>
                                <li key={index}
                                    className='list-group-item'>
                                    <Link to={`/search/story/${story.storyId}`}>{story.title}</Link>
                                </li>
                        )
                    }
                </ul>

            </div>
        }

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
                        <div className="row mt-2">
                            <label htmlFor="select-2">
                            <input onChange={e=>this.searchType(e)} type="radio" name="dbSelect" id="select-2" value="story"/>search for short story
                            </label>

                            <div className="col-1"></div>
                            <label htmlFor="select-1">
                                <input onChange={e=>this.searchType(e)} type="radio" name="dbSelect" id="select-1" value="book"/>Search for books
                            </label>

                        </div>
                    </div>
                    <div className="col-1"></div>
                    {display}
                </div>

            </div>
        )
    }

}

export default SearchBar