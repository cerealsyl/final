import React from 'react'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }


    render() {
        return(
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input
                            onChange={event => this.setState({email: event.currentTarget.value})}
                            value={this.state.email}
                            type="text"
                            placeholder="email"/>
                        <input
                            onChange={event => this.setState({password: event.currentTarget.value})}
                            value={this.state.password}
                            type="password"
                            placeholder="password"/>
                        <Link to={"/profile"}>
                            <button>Log in</button>
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