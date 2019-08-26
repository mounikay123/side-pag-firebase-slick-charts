import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class FilterTable extends Component {
    state = {
        arr: [],
        arr2: [],
        searchVale: ""

    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(res2 => {
                this.setState({ arr: res2 })
                console.log(this.state.arr, "arr")
            })

    }
   
    handletableChange = (e) => {
        if (e.target.value === "") {
            this.componentDidMount()
        }
        this.setState({ searchVale: e.target.value })
        var data2 = this.state.arr.filter((val) => {
            for (let [key, value] of Object.entries(val)) {
                if (value.toString().includes(e.target.value))
                    return val
            }
        })
        console.log(data2)
        this.setState({ arr2: data2 })
    }

    render() {
        const { arr, arr2, searchVale } = this.state
        return (
            <div>
                <input
                    type="text"
                    value={searchVale}
                    onChange={this.handletableChange}
                    placeholder="search name"
                />
                <div className="table">
                    <thead>
                        <tr>
                            <th> name </th>
                            <th>company</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             !searchVale ? arr.map((val) => (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.company}</td>
                                    <td>{val.email}</td>
                                </tr>
                            )) : arr2.map((val) => (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.company}</td>
                                    <td>{val.email}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                <button type="button" className="btn btn-xs btn-primary" ><Link to="/pagination" >Login</Link></button>
                </div>

            </div>
        )
    }
}
export default FilterTable;