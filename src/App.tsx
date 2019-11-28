import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SubPage from './pages/subPageExample/SubPage';
import PrivateRoute from './navigation/PrivateRoutes/PrivateRoute';
import { Auth } from './navigation/Auth';

const App: React.FC = () => {

  useEffect(() => {
    Auth();
  }, []);

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sub">Sub</Link>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/login" component={LoginPage} redirectPath="/"/> 
        <PrivateRoute exact path="/sub" component={SubPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
