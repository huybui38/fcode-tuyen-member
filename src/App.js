import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup page/Signup';
import Navbar from './components/Navbar';
import About from './components/Info page/About';
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
