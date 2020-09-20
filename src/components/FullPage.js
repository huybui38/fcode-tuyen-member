import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BackTop, Layout } from 'antd';
import { BiArrowToTop } from 'react-icons/bi';
import Navbar from './Navbar';
import AppFooter from './AppFooter';
import Home from './pages/Homepage/Home';
import Card from './pages/RequirePage/Card';
import Challenge from './pages/Challengepage/Challenge';
import MyCarousel from './pages/Info page/MyCarousel';
import '../App.css';

const { Header, Content, Footer } = Layout;

const FullPage = () => (
  <div>
    <Header>
      <Navbar className="page-navbar" />
    </Header>

    <Content>

      <Home />
      <MyCarousel />
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

  </div>

);

export default FullPage;
