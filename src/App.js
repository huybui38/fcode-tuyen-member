import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" />
    </Switch>
  </Router>

);

export default App;
