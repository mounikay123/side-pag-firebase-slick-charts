import React ,{Component} from 'react';

import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Routing from '../src/routing';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Routing /> 
        
        
      
      </div>
    );
  }

}

export default App;
