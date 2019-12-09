import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SubPage from 'pages/subPageExample/SubPage';
import PrivateRoute from 'navigation/PrivateRoutes/PrivateRoute';

const Routing : React.FC = () => {
    return <Router>
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/login" component={LoginPage} redirectPath="/"/> 
      <PrivateRoute exact path="/sub" component={SubPage} />
    </Switch>
  </Router>
}  

export default Routing;