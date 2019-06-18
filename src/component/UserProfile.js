import React from 'react'
import {Link} from 'react-router-dom'
import BookListItem from "./BookListItem";


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editInfoMode: false,
            editStoryMode: false,
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
            selectedStory: "",
            storyBody: "",
            storyTitle: "",

            newStoryTitle: ""
        }
    }


    updateUserInfo = () => {
        const newUser = {
            id: this.props.user.id,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            // bookList: this.props.user.storyList

        }

        console.log(this.props.user.storyList)
        this.props.updateUser(this.props.user.id, newUser)
        this.setState({
            editInfoMode: false
        })
    }

    updateStory = () => {
        const newStory = {
            ...this.state.selectedStory,
            story: this.state.storyBody,
            title: this.state.storyTitle
        }
        this.props.updateStory(this.state.selectedStory.storyId, newStory);
        this.setState({
            editStoryMode: false,
            selectedStory: ""
        })


    }

    createStory = () => {
        const newStory = {
            story: "New story here... (click edit to edit me)",
            title: this.state.newStoryTitle,
            writer_id: this.props.user.id
        }
        this.props.createStory(this.props.user.id, newStory);
        this.setState({
            newStoryTitle: ""
        })
    }


    render() {

        let display = ""
        if (this.state.selectedStory && this.state.editStoryMode) {
            display = <div>
                <div className="row float-right">
                    <button onClick={this.updateStory} className="btn btn-success">save</button>
                </div>
                <div className="row">
                    <textarea rows="6" onChange={e => this.setState({storyBody: e.currentTarget.value})}
                              value={this.state.storyBody} className="form-control mt-2"/>
                </div>

            </div>
        } else if (this.state.selectedStory && !this.state.editStoryMode) {
            display = <div>
                <div className="row">
                    <p className="mt-2">
                        {this.state.selectedStory.story}
                    </p>
                </div>

            </div>
        }


        if (!this.props.user) {
            return <div className="row text-center">
                <Link className="ml-50" to='/sign-in'>
                    <div className="color-black mt-5">Click me to sign in</div>
                </Link>
            </div>

        } else {
            let booklist = "";
            if (this.props.booklist.length !== 0) {
                booklist = <ul className='list-group'>
                    {this.props.booklist.map((book, index) =>
                        <BookListItem
                            user={this.props.user}
                            book={book}
                            key={index}
                            deleteBookItem={this.props.deleteBookItem}/>
                    )}
                </ul>
            } else {

                booklist = <div className="mt-5">Current user has no saved any books yet.</div>
            }

            let storylist = "";
            if (this.props.stories.length !== 0) {
                storylist = <ul className="nav nav-pills">
                    {this.props.stories.map((story, index) =>
                        <li onClick={() => this.setState({selectedStory: story, storyBody: story.story})} key={index}
                            className="nav-item">
                            <a className={`nav-link color-black ${this.state.selectedStory === story ? "active" : ""}`}
                               href="#">

                                {this.state.editStoryMode&&(this.state.selectedStory === story) ?
                                    <input
                                        onChange={e => this.setState({storyTitle: e.currentTarget.value})}
                                        // value={this.state.storyTitle}
                                        type="text"
                                        placeholder={story.title}/> :
                                    story.title}

                            </a>
                        </li>)}
                    <button
                        onClick={() => this.props.deleteStoryById(this.props.user.id, this.state.selectedStory.storyId)}
                        className="btn btn-danger ml-2">delete
                    </button>

                    <button onClick={() => this.setState({editStoryMode: true})} className="btn btn-info ml-1">edit</button>

                    <input
                        className="ml-3"
                        onChange={e => this.setState({newStoryTitle: e.currentTarget.value})}
                           value={this.state.newStoryTitle}
                           placeholder="New Story Title"
                    />
                    <button className='btn btn-warning'
                            onClick={this.createStory}
                    >
                        Create New
                    </button>

                </ul>

            } else {
                storylist = <div className="mt-5">Current user has no written any stories yet.
                    <input
                        className="ml-1"
                        onChange={e => this.setState({newStoryTitle: e.currentTarget.value})}
                        value={this.state.newStoryTitle}
                        placeholder="New Story Title"
                    />
                    <button className='btn btn-warning'
                            onClick={this.createStory}
                    >
                        Create New
                    </button>
                </div>

            }

            return (
                <div className="container">
                    <div className="row mt-5">

                        <div className="col-5">
                            <div className="row">
                                <div className="col-8">
                                    <h4>User Information</h4>
                                </div>
                                <div className="col-4">
                                    {this.state.editInfoMode
                                    && <button
                                        className="btn btn-success"
                                        onClick={this.updateUserInfo}>save</button>}

                                    {!this.state.editInfoMode
                                    && <button
                                        className="btn btn-info"
                                        onClick={() => this.setState({
                                            editInfoMode: true,
                                            username: this.props.user.username,
                                            password: this.props.user.password,
                                            email: this.props.user.email,
                                            firstName: this.props.user.firstName,
                                            lastName: this.props.user.lastName,
                                        })}>edit</button>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    username
                                </div>
                                <div className="col-6">
                                    {this.state.editInfoMode
                                    && <input
                                        type="text"
                                        value={this.state.username}
                                        onChange={e => this.setState({username: e.currentTarget.value})}
                                        className="form-control"
                                        placeholder="username"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.username}</div>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    password
                                </div>
                                <div className="col-6">
                                    {this.state.editInfoMode
                                    && <input
                                        value={this.state.password}
                                        onChange={e => this.setState({password: e.currentTarget.value})}
                                        type="password"
                                        className="form-control"
                                        placeholder="password"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.password}</div>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    email
                                </div>
                                <div className="col-6">
                                    {this.state.editInfoMode
                                    && <input
                                        value={this.state.email}
                                        onChange={e => this.setState({email: e.currentTarget.value})}
                                        type="email"
                                        className="form-control"
                                        placeholder="email"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.email}</div>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    first name
                                </div>
                                <div className="col-6">
                                    {this.state.editInfoMode
                                    && <input
                                        value={this.state.firstName}
                                        onChange={e => this.setState({firstName: e.currentTarget.value})}
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.firstName}</div>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    last name
                                </div>
                                <div className="col-6">
                                    {this.state.editInfoMode
                                    && <input
                                        value={this.state.lastName}
                                        onChange={e => this.setState({lastName: e.currentTarget.value})}
                                        type="text"
                                        className="form-control"
                                        placeholder="last name"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.lastName}</div>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    role
                                </div>
                                <div className="col-6">
                                    <div>{this.props.user.role}</div>
                                </div>

                            </div>

                        </div>
                        {this.props.user.role === "VIEWER" && <div className="col-7">
                            <div className="row">
                            <h3 className="col-6">
                                Saved BookList:
                            </h3>
                                <button
                                    onClick={() => this.props.findAllBooksByUserId(this.props.user.id)}
                                    className="btn btn-info mb-2">refresh
                                </button>
                            </div>
                            {booklist}
                        </div>}
                        {this.props.user.role === "WRITER" && <div className="col-7">
                            <h3>My Original Stories Collection:</h3>
                            {storylist}

                            {display}

                        </div>}


                    </div>
                </div>
            )


        }

    }
}

export default UserProfile

