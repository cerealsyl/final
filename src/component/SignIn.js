import React from 'react'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: true
        }
    }

    handleEmailInput = event => {
        this.setState({
            email: event.currentTarget.value,
            isLoggedIn: true
        })
    };

    handlePasswordInput = event => {
        this.setState({
            password: event.currentTarget.value,
            isLoggedIn: true
        })
    };
    validateUser = () => {
        this.props.validateUser(this.state.email, this.state.password)
        console.log(this.props)
        if(this.props.message === false) {
            console.log("here")
            this.setState({
                isLoggedIn: false
            })
        }else{
            this.props.history.push('/')
        }
    }


    render() {
        let error = ""
        if(! this.state.isLoggedIn) {
            error = <div className="alert alert-danger" role="alert">
                This is a danger alert—check it out!</div>
        } else {
            error = <div></div>
        }

        return(
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        {error}
                        <input
                            onChange={event => this.handleEmailInput(event)}
                            value={this.state.email}
                            type="text"
                            placeholder="email"/>
                        <input
                            onChange={event => this.handlePasswordInput(event)}
                            value={this.state.password}
                            type="password"
                            placeholder="password"/>
                        <Link to={"/profile"}>
                            <button onClick={this.validateUser}>Log in</button>
                        </Link>
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