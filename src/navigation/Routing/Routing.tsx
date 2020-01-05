import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SubPage from 'pages/subPageExample/SubPage';
import PrivateRoute from 'navigation/PrivateRoutes/PrivateRoute';
import NavMenu from 'components/NavMenu/NavMenu';
import NotFound from 'pages/NotFound/NotFound';

const Routing : React.FC = () => {
    return <Router>
      <NavMenu />
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/login" component={LoginPage} redirectPath="/"/> 
      <PrivateRoute exact path="/sub" component={SubPage} />
      <Route path="*"><NotFound /></Route>
    </Switch>
  </Router>
}  

export default Routing;