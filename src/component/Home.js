import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Header from "./Header";
import SearchBarContainer from "../container/SearchBarContainer";
import SignInContainer from "../container/SignInContainer";
import SignUpContainer from "../container/SignUpContainer"
import UserProfileContainer from '../container/ProfileContainer'
import UserProfilePublicContainer from "../container/UserProfilePublicContainer";
import SearchDetail from './SearchDetail';


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
                    <Header/>
                    <Route exact path="/" component={SearchBarContainer}/>
                    <Route path="/sign-in" component={SignInContainer}/>
                    <Route path="/register" component={SignUpContainer}/>
                    <Route path='/myprofile' component={UserProfileContainer}/>
                    <Route path='/profile/:userId' component={UserProfilePublicContainer}/>
                    <Route path="/search/:bookId" render={() => <SearchDetail/>}/>
                </div>

            </Router>

        )
    }
}

export default Home
