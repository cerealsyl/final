import React from 'react'
import { Link } from 'react-router-dom'


const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
    Object.values(formErrors).forEach(val => val === null && (valid = false));
    return valid;
}

const emailValidation = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            userType: "",
            formErrors: {
                username: "",
                password: "",
                email: "",
                userType: "",
            }
        }
    }

    handleSubmit = event =>{
        const {username, password, email, userType} = this.state
        event.preventDefault();

        if(formValid(this.state.formErrors)) {
            const user = {
                username: username,
                password: password,
                email: email,
                userType: userType
            }
            console.log("user", user)
            this.props.register(user)
        }else{
            console.log("form invalid")
        }
        // this.props.register(this.state.name, this.state.password, this.state.email, this.state.userType)
        // this.setState({
        //     name: "",
        //     password: "",
        //     email: "",
        //     userType: "",
        // })
    }


    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
        switch(name) {
            case "username":
                formErrors.username = value.length < 3 && value.length > 0 ? "minimum three characters required" : ""
                break;
            case "password":
                formErrors.password = value.length < 6 && value.length > 0 ? "minimum six characters required" : ""
                break;
            case "email":
                formErrors.email = emailValidation.test(value) && value.length > 0 ? "" : "Invalid Email Address"
                break;
            default:
                break
        }
        this.setState({
            formErrors, [name]: value
        })
    }

    handleUserType = event => {
        this.setState({
            userType: event.currentTarget.value
        })
    }



    render() {
        const { formErrors } = this.state;
        let errorMessage = ""

        if(this.props.fail) {
            errorMessage = <div className="alert alert-danger text-center mt-5" role="alert">{this.props.fail}</div>
        }else if (this.props.success) {
            setTimeout(() => {
                this.props.history.push('/sign-in')
                this.props.reset();
            }, 500)

        }
        return(
            <div className="login-page">
                {errorMessage}
                <div className="form">
                <form className="register-form" noValidate>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        type="text"
                        name="username"
                        formNoValidate
                        placeholder="username"/>
                    {formErrors.username.length > 0 && <span className="errorMessage">{formErrors.name}</span>}

                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        type="password"
                        name="password"
                        formNoValidate
                        placeholder="password"/>
                    {formErrors.password.length > 0 && <span className="errorMessage">{formErrors.password}</span>}
                    <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        type="text"
                        name="email"
                        formNoValidate
                        placeholder="email address"/>
                    {formErrors.email.length > 0 && <span className="errorMessage">{formErrors.email}</span>}
                    <input
                        onChange={e => this.handleUserType(e)}
                        type="radio"
                        name="user-type"
                        value="VIEWER"/>bookie who reads
                    <input
                        onChange={e => this.handleUserType(e)}
                        type="radio"
                        name="user-type"
                        value="WRITER"/>bookie who writes

                    <button onClick={this.handleSubmit} type="submit" className="mt-2">Create</button>
                    <div className="mt-2">Already a bookie
                        <Link to="/sign-in"> Log in!</Link>
                    </div>

                </form>
                </div>
            </div>
        )
    }
}

export default SignUp