import React from 'react'
import {Link} from 'react-router-dom'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleUsernameInput = event => {
        this.setState({
            username: event.currentTarget.value,
        })
    };

    handlePasswordInput = event => {
        this.setState({
            password: event.currentTarget.value,
        })
    };
    validateUser = () => {
        this.props.validateUser(this.state.username, this.state.password)
    }


    render() {
        let error = "";
        console.log("loggedInFail", this.props.loggedInFail)
        if (this.props.loggedInFail) {
            error = <div className="alert alert-danger mt-5" role="alert">
                Log in failed, please try again</div>
        } else if (this.props.loggedIn) {
            setTimeout(()=> this.props.history.push(`/myprofile`), 500);
            
        }

        return (
            <div className="login-page">
                <div className="form">
                    {error}
                    <form className="login-form">
                        <input
                            onChange={event => {
                                this.handleUsernameInput(event)

                            }}
                            value={this.state.username}
                            type="text"
                            placeholder="username"/>
                        <input
                            onChange={event => this.handlePasswordInput(event)}
                            value={this.state.password}
                            type="password"
                            placeholder="password"/>
                        <button type="button" onClick={(event) => {
                            event.preventDefault()
                            this.validateUser()
                        }}>Log in
                        </button>
                        <div className="mt-2">Not a bookie yet?
                            <Link to="/register"> Register!</Link>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default SignIn