import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FilterTable2 extends Component {
    state = {
        arr: [],
        arr2: [],
        data: "",
        data1: "",
        data2: ""
    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(res2 => {
                this.setState({ arr: res2 })
                console.log(this.state.arr, "arr")
            })
    }
    handletableChange1 = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handletableChange = (value, value1, value2) => {
        return (x) => {
            // for (let [k, val] of Object.entries(x)) {
            //     if (val.toString().includes(value)) {
            //         return x;
            //     }
            // }
            if (!value.length && !value1.length && !value2.length) {
                return x
            }
            else if (value.length && !value1.length && !value2.length) {
                if (x["name"].includes(value)) {
                    return x
                }
            }
            else if (value.length && value1.length && !value2.length) {
                if (x["name"].includes(value) && x["company"].includes(value1)) {
                    return x
                }
            }
            else if (value.length && value1.length && value2.length) {
                if (x["name"].includes(value) && x["company"].includes(value1) && x["email"].includes(value2)) {
                    return x
                }
            }

        }
    }
    render() {
        const { arr, arr2, searchVale, data, data1, data2 } = this.state
        return (
            <div>
                <input
                    type="text" name="data"
                    value={data}
                    onChange={this.handletableChange1}
                    placeholder="search name"
                />
                <input
                    type="text" name="data1"
                    value={data1}
                    onChange={this.handletableChange1}
                    placeholder="search name"
                />
                <input
                    type="text" name="data2"
                    value={data2}
                    onChange={this.handletableChange1}
                    placeholder="search name"
                />
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th> name </th>
                                <th>company</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arr.filter(this.handletableChange(data, data1, data2)).map((v, k) => (
                                    <tr key={k}>
                                        <td>{v.name}</td>
                                        <td>{v.company}</td>
                                        <td>{v.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-xs btn-primary" ><Link to="/pagination" >Login</Link></button>
                </div>
            </div>
        )
    }
}
export default FilterTable2;