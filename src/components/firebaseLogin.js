import React, { Component } from 'react';
import firebase from '../firebase';
import md5 from 'md5';
import axios from 'axios';

class FirebaseLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            usersRef: firebase.database().ref('users'),
            errors: []

        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    signup = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
        .then((createuser)=>{
            createuser.user.updateProfile({
                displayName: this.state.username,
                photoURL: `http://gravatar.com/avatar/${md5(createuser.user.email)}?d=identicon`
            })
            .then(() => {
                this.saveUser(createuser).then(() => {
                  console.log("user saved")
               this.setState({userName:'',
           password: ''
           })
        })
       
      console.log("this.props.history" , this.props.history);
       this.props.history.push('/login2')
              
            })
              .catch(err => {
               this.setState({errors:this.state.errors.concat(err)})
              })
          })
     
    }
    saveUser = userData => {
        return this.state.usersRef.child(userData.user.uid).set({
          name: userData.user.displayName,
          avatar: userData.user.photoURL
        })
    }
login=(e)=>{
    e.preventDefault();

}
    render() {
        return (
            <div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label>username</label>
                            <input type="text" className="form-control"
                             name="username" 
                            value={this.state.username} 
                            onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.onChange} />
                        </div>
                        <button type="button" className="btn btn-xs btn-primary" onClick={this.signup}>
                            signup
                        </button>
                        
                    </form>
                </div>
            </div>
        )
    }
}
export default FirebaseLogin;
