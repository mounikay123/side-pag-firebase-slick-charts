import React, { Component } from 'react';

import firebase from '../firebase';
class Firebaselogin2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username2:"",
             password2:""
        }
    }
    
    componentDidMount(){
        
    }
    onChange2=(e)=>{
        this.setState({ [e.target.name]: e.target.value })
    }
    login=()=>{
     
     firebase.auth().onAuthStateChanged(users=>{
        console.log("che.b",users)
        if(users){
            this.props.history.push('/home')
            sessionStorage.setItem("users",JSON.stringify(users))
        }else{
            this.props.history.push('/login2')
        }
    })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label>username</label>
                        <input type="text" className="form-control"
                            name="username2"
                            value={this.state.username2}
                            onChange={this.onChange2} />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="text" className="form-control"
                         name="password2" 
                         value={this.state.password2}
                          onChange={this.onChange2} />
                    </div>
                   
                    <button type="button" className="btn btn-xs btn-primary" onClick={this.login}>
                        login
                        </button>

                </form>
            </div>
        )
    }
}
export default Firebaselogin2;
