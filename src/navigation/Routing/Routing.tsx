import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import InProgress from 'pages/InProgressPage/InProgessPage';
import PrivateRoute from 'navigation/PrivateRoutes/PrivateRoute';
import NavMenu from 'components/NavMenu/NavMenu';
import NotFound from 'pages/NotFound/NotFound';

const Routing : React.FC = () => {
    return <Router>
      <NavMenu />
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/login" component={LoginPage} redirectPath="/"/> 
      <PrivateRoute exact path="/inprogress" component={InProgress} />
      <Route path="*"><NotFound /></Route>
    </Switch>
  </Router>
}  

export default Routing;