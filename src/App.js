import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BackTop, Layout } from 'antd';
import { BiArrowToTop } from 'react-icons/bi';
import Navbar from './components/Navbar';
import AppFooter from './components/AppFooter';
import Home from './components/pages/Homepage/Home';
import About from './components/pages/Info page/About';
import Card from './components/pages/RequirePage/Card';
import Challenge from './components/pages/Challengepage/Challenge';
import Timeline from './components/pages/Timeline/Timeline';

import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Header>
      <Navbar />
    </Header>

    <Content>
      <Home />
      <About />
      <Card />
      <Challenge />
    </Content>

    <Footer>
      <AppFooter />
      <BackTop>
        <div className="ant-back-top-content">
          <BiArrowToTop className="ant-back-top-icon" />
        </div>
      </BackTop>
    </Footer>

  </Router>

);

export default App;
