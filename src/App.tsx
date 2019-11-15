import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SubPage from './pages/subPageExample/SubPage';
import PrivateRoute from './navigation/PrivateRoutes/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sub">Sub</Link>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        {/* <Route exact path="/sub" component={SubPage} /> */}
        <PrivateRoute exact path="/sub" component={SubPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
