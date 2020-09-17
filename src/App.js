import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { BackTop, Layout } from 'antd';
// import { BiArrowToTop } from 'react-icons/bi';
// import Navbar from './components/Navbar';
// import AppFooter from './components/AppFooter';
// import Home from './components/pages/Homepage/Home';
// import Card from './components/pages/RequirePage/Card';
// import Challenge from './components/pages/Challengepage/Challenge';
// import Timeline from './components/pages/Timeline/Timeline';
import FullPage from './components/FullPage';
import Login from './components/pages/Login/Login';

import MyCarousel from './components/pages/Info page/MyCarousel';
import './App.css';

const App = () => (
  <Router>
    <FullPage />
  </Router>

);

export default App;
