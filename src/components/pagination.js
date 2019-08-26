import React, { Component } from 'react';


class Pagination extends Component {
    state = {
        pageData: [],
        currentPage: 1,
        numPerPage: 5
    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(res2 => this.setState({ pageData: res2 }));

    }
    onClick = (event) => {
        this.setState({ currentPage: event.target.id })
    }
    render() {
        const { pageData, currentPage, numPerPage } = this.state;
        console.log(pageData, "ddddddddddd")
        const end = currentPage * numPerPage;
        const begin = end - numPerPage;
        const pageData2 = pageData.slice(begin, end);
        console.log(pageData2.length, pageData2)
        const data22 = pageData2.map((res, k) => (
            <tr key={k}>
                <td>{res.name}</td>
                <td>{res.company}</td>
                <td>{res.email}</td>
            </tr>
        ))
        const Dataa = () => (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>company</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>

                    {data22}

                </tbody>
            </table>


        )
        const pages = []
        for (var i = 1; i <= Math.ceil(pageData.length / numPerPage); i++) {
            pages.push(i);
        }
        const cc = pages.map((v, k) => (
            <ul>  <li className="pagination" key={k}
                id={v}
                onClick={this.onClick}>
                {v}
            </li>
            </ul>


        ))

        return (
            <div>
                <Dataa />
                {cc}
            </div>
        )
    }
}

export default Pagination;
