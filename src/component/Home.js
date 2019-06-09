import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SignInContainer from "../container/SignInContainer";
import SignUpContainer from "../container/SignUpContainer"
import Result from './Result';
import DisplayContent from "./DisplayContent";
import UserProfile from "./UserProfile";


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
                    <Route exact path="/" component={SearchBar}/>
                    <Route path="/sign-in" component={SignInContainer}/>
                    <Route path="/register" component={SignUpContainer}/>
                    <Route path="/search" component={Result}/>
                    <Route path="/details/:bookId" component={DisplayContent}/>
                    <Route path='/profile' component={UserProfile}/>
                    <Route path='/profile/:username' component={UserProfile}/>
                </div>

            </Router>

        )
    }
}

export default Home
