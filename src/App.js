import React from 'react';
import Signup from './components/Signup page/Signup';
import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact />
    </Switch>

  </Router>

);

export default App;
