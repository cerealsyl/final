import React from 'react'
import {Link} from 'react-router-dom'
import BookListItem from "./BookListItem";


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editInfoMode: false,
            editStoryMode: false,
            username: this.props.user.username,
            password: this.props.user.password,
            email: this.props.user.email,
            firstname:this.props.user.firstname,
            lastname: this.props.user.lastname,
            selectedStory: "",
            storyBody: ""
        }
    }

    updateUserInfo = () => {
        const newUser = {
            id: this.props.user.id,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstname: this.state.firstname,
            lastnama: this.state.lastname

        }
        // this.props.updateUser(this.props.user.id, newUser)
        this.setState({
            editInfoMode: false
        })
    }

    updateStory = () => {
        const newStory = {
            ...this.state.selectedStory,
            story: this.state.storyBody
        }
        console.log(newStory)
        // this.props.updateStory(this.selectedStory.id, newStory);
        this.setState({
            editStoryMode: false
        })


    }



    render() {
        let display = ""
        if(this.state.selectedStory && this.state.editStoryMode) {
            display = <div>
                <div className="row float-right">
                    <button onClick={this.updateStory} className="btn btn-success">save</button>
                </div>
                <div className="row">
                    <textarea rows="6" onChange={e => this.setState({storyBody: e.currentTarget.value})} value={this.state.storyBody} className="form-control mt-2"></textarea>
                </div>

            </div>
        }else if(this.state.selectedStory && !this.state.editStoryMode){
            display =  <div>
                <div className="row float-right">
                    <button className="btn btn-danger">delete</button>
                    <button onClick={() => this.setState({editStoryMode: true})} className="btn btn-info ">edit</button>
                </div>
                <div className="row">
                    <p className="mt-2">
                        {this.state.selectedStory.story}
                    </p>
                </div>

            </div>
        }

        if (!this.props.user) {
            return <div className="row">
                <Link to='/sign-in'>
                    <div className="color-black mt-5 text-center">Click me to view profile</div>
                </Link>
            </div>

        } else {
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
                                        onClick={() => this.setState({editInfoMode: true})}>edit</button>}
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
                                        value={this.state.firstname}
                                        onChange={e => this.setState({firstname: e.currentTarget.value})}
                                        type="text"
                                        className="form-control"
                                        placeholder="first name"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.firstname}</div>}
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    last name
                                </div>
                                <div className="col-6">
                                    {this.state.editInfoMode
                                    && <input
                                        value={this.state.lastname}
                                        onChange={e => this.setState({lastname: e.currentTarget.value})}
                                        type="text"
                                        className="form-control"
                                        placeholder="last name"/>}
                                    {!this.state.editInfoMode
                                    && <div>{this.props.user.lastname}</div>}
                                </div>

                            </div>

                        </div>
                        {this.props.user.userType === "VIEWER" && <div className="col-7">
                            <h3>
                                Saved BookList:
                            </h3>
                            <ul className='list-group'>

                                {this.props.user.bookList.map((book, index) =>
                                    <BookListItem
                                    book={book}
                                    key={index}/>
                                )}
                            </ul>
                        </div>}
                        {this.props.user.userType === "WRITER"&& <div className="col-7">
                            <h3>My Original Stories Collection:</h3>

                            <ul className="nav nav-pills">
                                {this.props.user.stories.map((story, index) =>
                                    <li onClick={() => this.setState({selectedStory: story, storyBody: story.story})} key={index} className="nav-item">
                                        <a className={`nav-link color-black ${this.state.selectedStory === story? "active": ""}`} href="#">{story.title}</a>
                                    </li>)}
                                <button
                                    // onClick={this.deleteStory}
                                    className="btn btn-danger ml-2">delete</button>
                                <button
                                    // onClick={this.updateStoryTitle}
                                    className="btn btn-info ml-2">edit</button>
                            </ul>
                            {display}

                        </div>}



                    </div>
                </div>
            )


        }


        //     let display = ''
        //     if(display) {
        //         return (
        //             <div className="login-page">
        //                 <div>
        //                     <h3>user name</h3>
        //                 </div>
        //                 <h4 className="mt-3">Book list: </h4>
        //                 <div>
        //                     <ul className="list-group">
        //
        //                         <li className="list-group-item text-center">
        //                             hey
        //                         </li>
        //
        //
        //                         <li className="list-group-item text-center">
        //                             hey
        //                         </li>
        //
        //
        //                     </ul>
        //                 </div>
        //             </div>
        //
        //         )
        //     } else {
        //         return (
        //             <div>
        //                 widgets
        //             </div>
        //         )
        //     }
        //
        // }
    }
}

export default UserProfile

