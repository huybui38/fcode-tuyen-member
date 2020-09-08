import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Homepage/Home';
import './App.css';

const App = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    <Footer />
  </Router>

);

export default App;
