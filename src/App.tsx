import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SubPage from './pages/subPageExample/SubPage';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sub">Sub</Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sub" component={SubPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
