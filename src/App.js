import React from 'react';
import Signup from './components/Signup page/Signup';
import Navbar from './components/Navbar';
import About from './components/Info page/About';
import './App.css';

const App = () => (
  <div>
    <Navbar className="navbar" />
    <About className="about" />
  </div>

);

export default App;
