import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import data from '../dropdownData';

class FiltersInTable extends Component {

    state = {
       
        multiple:false,
        data:data
        
       
    }
    handleInputChange(input, e) {
        console.log("value", input)
      }
    
      handleChange(selectedOptions) {
         console.log(selectedOptions);
         
       
      }
    
    
    
    render() {
       
        const {data} =this.state;
        return (
            <div>
                {/* <div className="row">
                    <div className="col-md-3">
                        <React.Fragment>
                            <Typeahead
                                labelKey="name"
                                options={data}
                                highlightOnlyResult={true}
                                placeholder="Filter by state name..."
                                onInputChange={this.handleInputChange}
                                onKeyDown={this.handleChange}
                               
                               
                            />
                            </React.Fragment>
                    </div>
                    <div className="col-md-3">
                    <Typeahead
                                labelKey="capital"
                                options={data}
                                highlightOnlyResult={true}
                                placeholder="Filter by capital..."
                                onInputChange={this.handleInputChange}
                                onKeyDown={this.handleChange}
                               
                            />
                    </div>
                    <div className="col-md-3">
                    <Typeahead
                                labelKey="region"
                                options={data}
                                highlightOnlyResult={true}
                                placeholder="Filter by region..."
                                onInputChange={this.handleInputChange}
                                onKeyDown={this.handleChange}
                               
                            />
                    </div>
                   
                </div>
                <div className="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>capital</th>
                            <th>region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data?this.state.data.map((v,k)=>(
                                <tr key={k}>
                                <td>{v.name}</td>
                                <td>{v.capital}</td>
                                <td>{v.region}</td>
                            </tr>
                            )
                            ):<p>No results found</p>
                              
                           
                        }
                    </tbody>

                </div> */}
                <div className="divStyles">

                </div>
            </div>
        )
    }
}
export default FiltersInTable;