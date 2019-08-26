import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class ClickButton extends Component {
    state = {
        likeCount: 10,
        unlikeCount: 1000,
        color: "",
        color1: ""

    }
    handleLike = (e) => {
        console.log(this.state.color.length, this.state.color1.length,e.target.name)
        switch (e.target.name) {

            case "like":
                if (!this.state.color.length && this.state.color1.length) {
                    return this.setState({ likeCount: this.state.likeCount + 1, unlikeCount: this.state.unlikeCount - 1, color: "App-link", color1: "" })
                }
                else if (!this.state.color.length ) {

                    return this.setState({ likeCount: this.state.likeCount + 1, color: "App-link", color1: "" })
                }
                else {
                    return this.setState({ likeCount: this.state.likeCount - 1, color: "" })
                }
            case "unlike":
                    if (!this.state.color1.length && this.state.color.length) {
                        return this.setState({ likeCount: this.state.likeCount-1, unlikeCount: this.state.unlikeCount+1, color: "", color1: "App-link" })
                    }
                else if (!this.state.color1.length) {
                    return this.setState({ unlikeCount: this.state.unlikeCount + 1, color1: "App-link" })
                }
                else {
                    return this.setState({ unlikeCount: this.state.unlikeCount - 1, color1: "" })
                }

        }
    }
    render() {
        return (
            <div>
                <p>mounika123

                </p>
                <h2>{this.state.likeCount}</h2>
                <button className={this.state.color} name="like" onClick={this.handleLike} >Like</button>
                <h2>{this.state.unlikeCount}</h2>
                <button className={this.state.color1} name="unlike" onClick={this.handleLike}>unLike</button>
                <Link to="/home"><button className="btn btn-xs btn-primary">add</button></Link>
            </div>
        )
    }
}
export default ClickButton;