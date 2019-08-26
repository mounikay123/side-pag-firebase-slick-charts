import React, { Component } from 'react'

export default class Arrow extends Component {
    state = {
        value: "fffffffff"
    }
  
    onChange =(e)=> {
        console.log(this,"thisssssssss")
this.setState({value:e.target.value})
    }
    render() {
        console.log(this,"classsssssssssss") ;
        return (
            <div>
                <input value={this.state.value} onChange={this.onChange} />
            </div>
        )
    }
}
