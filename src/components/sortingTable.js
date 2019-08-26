import React, { Component } from 'react'

class SortingTable extends Component {
    state = {
        arr: [],
        searchVal: ""
    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(res2 => {
                console.log(res2)
                this.setState({ arr: res2 })
            })
    }

    changeHandler = (e) => {
        this.setState({ searchVal: e.target.value })
    }
    handleChange = (value) => {
        return (x) => {
            for (let [k, val] of Object.entries(x)) {
                if (val.toString().includes(value)) {
                    return x;
                }
            }
        }
    }
   
    sortBy(key) {
        let arrayCopy = [...this.state.arr];
        console.log(arrayCopy)
        arrayCopy.sort(this.compareBy(key));
        this.setState({ arr: arrayCopy });
    }
    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="search name" onChange={this.changeHandler} />
                <table>
                    <thead>
                        <tr>
                            <th><button onClick={() => this.sortBy('name')}>name</button> </th>
                            <th><button onClick={() => this.sortBy('company')}>company</button></th>
                            <th><button onClick={() => this.sortBy('email')}>email</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.arr.filter(this.handleChange(this.state.searchVal)).map((v, k) => (
                                <tr key={k}>
                                    <td>{v.name}</td>
                                    <td>{v.company}</td>
                                    <td>{v.email}</td>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
export default SortingTable;
