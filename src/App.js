import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Timeline from './components/pages/Timeline/Timeline';
import FullPage from './components/FullPage';
import Login from './components/pages/Login/Login';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={FullPage} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/signup" component={Login} />
    </Switch>
  </Router>

);

export default App;
