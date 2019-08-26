import React, { Component } from 'react'

import LoginActions from '../actions/LoginActions';
import { connect } from 'react-redux';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errors: ""
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.username, this.state.password);
        if (!this.state.username || !this.state.password) {
            this.setState({ errors: "please Fill all the details " })
        } else {
            if (this.state.password.length < 6) {
                this.setState({ errors: "password aholud be atleast 6 character " })
            }
            else {


                this.props.dispatch(LoginActions(this.state));
            }
        }
    }
    componentWillReceiveProps(nextProps) {


        if (nextProps.error) {
            this.setState({ errors: nextProps.error })

        }


    }
    render() {
        const { position, history } = this.props
        if (position) {
            history.push("/home")
        }

        return (
            <div>
                <div className='row'>
                    <div className="col-md-7">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control" name="username" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>password</label>
                                <input type="password" className="form-control" name="password" onChange={this.changeHandler} />
                            </div>

                            <button className="btn btn-xs btn-primary">Login</button>
                            <button className="btn btn-xs btn-primary">Login2</button>
                        </form>

                    </div>

                </div>
                {this.state.errors}

            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log("errors", state.rootReducer1.errors)
    return {
        position: state.rootReducer1.auth,
        error: state.rootReducer1.errors
    }


}

export default connect(mapStateToProps, null)(Login);
