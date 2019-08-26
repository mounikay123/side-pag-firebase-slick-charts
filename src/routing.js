import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Pagination from './components/pagination';
import Pagination2 from './components/pagination2';
import ClickButton from './components/clickButton';
import FiltersInTable from './components/filterSInTable';


import FilterTable2 from './components/simpleWaySearching';
import Firebaselogin2 from './components/firebaselogin2';
import FirebaseLogin from './components/firebaseLogin';
import FirebaseData from './components/firebaseData';

// import Simple from './components/simple';
import SimpleSlider from './components/slick';
import Charts from './components/Charts';
import Reactsidenav from './components/react-sidenav';
import Hooks from './components/hooks';
import FilterPagination from './components/pagination3';
 class Routing extends Component {
    render() {
        return (
           <BrowserRouter>
           <Switch>
           
               <Route exact={true} path="/" component={FirebaseData} />
               <Route  path="/FirebaseLogin" component={FirebaseLogin} />
               <Route path="/login2" component={Firebaselogin2} />
               {/* <Route path="/" component={ClickButton} /> */}
               <Route  path="/home" component={Home} />
               <Route  path="/login" component={Login} />
               <Route  path="/pagination" component={Pagination} />
               <Route path="/Slider" component={SimpleSlider} />
               <Route path="/Charts" component={Charts} /> 
               <Route path="/Sidemenu" component={Reactsidenav} />
               <Route path="/hooks" component={Hooks} />
               <Route path="/FilterPagination" component={FilterPagination} />
           </Switch>
           </BrowserRouter>
        )
    }
}
export default Routing;