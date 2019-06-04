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
        this.state = {
            name: "",
            password: "",
            email: "",
            userType: "",
            formErrors: {
                name: "",
                password: "",
                email: "",
                userType: "",
            }
        }
    }

    handleSubmit = event =>{
        const {name, password, email, userType} = this.state
        event.preventDefault();

        if(formValid(this.state.formErrors)) {
            console.log(name, password, email, userType)
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
            case "name":
                formErrors.name = value.length < 3 && value.length > 0 ? "minimum three characters required" : ""
                break;
            case "password":
                formErrors.name = value.length < 6 && value.length > 0 ? "minimum six characters required" : ""
                break;
            case "email":
                formErrors.email = emailValidation.test(value) && value.length > 0 ? "" : "Invalid Email Address"
                break;
            default:
                break
        }
        this.setState({
            formErrors, [name]: value
        }, () => console.log(this.state))

    }



    render() {
        const { formErrors } = this.state
        return(
            <div className="login-page">
                <div className="form">
                <form className="register-form" onSubmit={this.handleSubmit} noValidate>
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        formNoValidate
                        placeholder="name"/>
                    {formErrors.name.length > 0 && <span className="errorMessage">{formErrors.name}</span>}

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
                        onChange={this.handleChange}
                        type="radio"
                        name="user-type"
                        formNoValidate
                        value="viewer"/>bookie who reads
                    <input
                        onChange={this.handleChange}
                        type="radio"
                        name="user-type"
                        formNoValidate
                        value="writer"/>bookie who writes

                    <Link to="/sign-in">
                        <button type="submit" className="mt-2">Create</button>
                    </Link>
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