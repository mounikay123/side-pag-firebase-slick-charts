import React, { Component } from 'react'

class Pagination2 extends Component {
    state = {
        pageData:[],
        currentPage:1,
        numPerPage:5,
        selectPage:""
    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json()).then(res2 => {
                this.setState({ pageData: res2 })
              
            })
    }
    handleChange=(e)=>{
this.setState({selectPage:e.target.id})
    }
    render() {
    const {  pageData, currentPage, numPerPage}=this.state;
    const end=currentPage*numPerPage;
    const begin= end-numPerPage;
    const pageData2=pageData.slice(begin,end);
    const data22= pageData2.map((v,k)=>(
        <tr key={k}>
        <td>{v.name}</td>
        <td>{v.company}</td>
        <td>{v.email}</td>
    </tr>
    ))
     const dataaa = ()=>(
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
     
        
        const pageNumber=[];
        for(var i=0; i<=Math.ceil(pageData.length/numPerPage); i++){
            pageNumber.push(i)
        }
        const pagination=()=>(
            pageNumber.map((v,k)=>(
                <ul >
                <li key={k} onClick={this.handleChange}>{v}</li>
                </ul>
            )
               
            )
        )
         return (
            <div>
               <dataaa />
             {pagination}
            </div>
        )
    }
}
export default Pagination2