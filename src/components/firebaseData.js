import React, { Component } from 'react'

class FirebaseData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            password:"",
            age:"",
            education:""
        }
    }
    onChange2=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <form>
                <div className="form-group">
                        <label>username</label>
                        <input type="email" className="form-control"
                            name="username2"
                            value={this.state.username}
                            onChange={this.onChange2} />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="text" className="form-control"
                         name="password2" 
                         value={this.state.password}
                          onChange={this.onChange2} />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="number" className="form-control"
                         name="password2" 
                         value={this.state.age}
                          onChange={this.onChange2} />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="text" className="form-control"
                         name="password2" 
                         value={this.state.education}
                          onChange={this.onChange2} />
                    </div>
                    <button type="text" className="btn btn-xs btn-primary">add</button>
                </form>
                   
            </div>
        )
    }
}
export default FirebaseData;