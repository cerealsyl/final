import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            searchType: "",
            books: null,
            stories: null
        }
    }


    keywordChanged = event =>
        this.setState({keyword: event.target.value})


    searchBooks = () => {
        // this.setState({
        //     books: null,
        //     stories: null
        // })

        if(this.state.searchType) {
            if(this.state.searchType === "story") {
                this.props.searchStory(this.state.keyword)


            }else {
                this.props.fetchBooks(this.state.keyword)
            }
        }else{
            alert("Please choose a search type.")
        }


    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("here")
        if(prevProps !== this.props) {
            this.setState({
                books: this.props.books,
                stories: this.props.stories
            })
        }
    }

    searchType = e => {
        this.setState({
            searchType: e.currentTarget.value
        })
    }



    render() {
        let message = "";

        let display = ""
        if(this.state.searchType && this.state.searchType === "story"  && this.state.stories) {
            if(this.props.message === null){
                if(this.state.stories.length === 0) {
                    display = <div className="col-5 mt-5">
                        Not result found, please search a different keyword.
                    </div>
                }else{
                    display =
                        <div className="col-5 mt-5">
                            {message}
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
            }else {

                display = <div className="col-5 mt-5">
                    {this.props.message}
                </div>

            }

        }else if(this.state.searchType && this.state.searchType === "book"){
            if(this.props.message === null) {
                if(this.state.books === undefined) {
                    display = <div className="col-5 mt-5">No result found</div>
                }else if(this.state.books){
                    if(this.state.books.length === 0) {
                        display = <div className="col-5 mt-5">
                            Not result found, please search a different keyword.
                        </div>
                    }else{
                        console.log(this.props.message)
                        display =
                            <div className="col-5 mt-5">
                                {message}
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
                    }
                }

            }else{
                display =
                    <div className="col-5 mt-5">
                        {this.props.message}
                    </div>

            }

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
                            placeholder="search your favorite stories or books...."/>
                        <button
                            onClick={this.searchBooks}
                            className="col-2 btn btn-outline-success ml-3 mt-350">
                            Search
                        </button>
                        </div>
                        <div className="row mt-2">
                            <label htmlFor="select-2">
                            <input
                                onChange={e=>this.searchType(e)}
                                type="radio"
                                name="dbSelect"
                                id="select-2"
                                value="story"/>Search for short story
                            </label>

                            <div className="col-1"></div>
                            <label htmlFor="select-1">
                                <input
                                    onChange={e=>this.searchType(e)}
                                    type="radio"
                                    name="dbSelect"
                                    id="select-1"
                                    value="book"/>Search for books
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