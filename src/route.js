import React from 'react';
import {Route, Router, IndexRoute, browserHistory, memoryHistory } from 'react-router';
import {Switch} from 'react-router-dom';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';


import App from "./containers/App/App";
import Contact from "./containers/contact/profile";
import poltChart from "./containers/Chart/barchart";
import Login from "./containers/login/login";
//import UserLogin from "./containers/login/conLogin";

import Visualization from "./containers/visualization/dummy";


export default (
<div>
  <Route path="/" component={Login} />
  <IndexRoute component={Login} />
  <Route  component={App}>
     <Route path="visualization" component={Visualization} />
     <Route path="contact" component={Contact} />
     <Route path="barchart" component={poltChart} />
     

   </Route>
   </div>
);
