import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Homepage/Home';
import About from './components/pages/Info page/About';
import './App.css';

const App = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route path="/" exact component={About} />
    </Switch>
    <Footer />
  </Router>

);

export default App;
