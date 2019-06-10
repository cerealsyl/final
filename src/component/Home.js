import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import HeaderContainer from "../container/HeaderContainer";
import SearchBarContainer from "../container/SearchBarContainer";
import SignInContainer from "../container/SignInContainer";
import SignUpContainer from "../container/SignUpContainer"
import UserProfileContainer from '../container/ProfileContainer'
import UserProfilePublicContainer from "../container/UserProfilePublicContainer";
import SearchBookDetailContainer from '../container/SearchBookDetailContainer';
import SearchStoryDetailContainer from '../container/SearchStoryDetailContainer';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInFail: this.props.loggedInFail
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props !== nextProps) {
            this.setState({
                loggedInFail: this.props.loggedInFail
            })
        }
    }


    render() {
        return (
            <Router>
                <div className="container-fluid bg-bk w-100 h-100">
                    <HeaderContainer/>
                    <Route exact path="/" component={SearchBarContainer}/>
                    <Route path="/sign-in" component={SignInContainer}/>
                    <Route path="/register" component={SignUpContainer}/>
                    <Route path='/myprofile' component={UserProfileContainer}/>
                    <Route path='/profile/:userId' component={UserProfilePublicContainer}/>
                    <Route path="/search/book/:bookId" render={() => <SearchBookDetailContainer/>}/>
                    <Route path='/search/story/:storyId' render={() => <SearchStoryDetailContainer/>}/>
                </div>

            </Router>

        )
    }
}

export default Home
