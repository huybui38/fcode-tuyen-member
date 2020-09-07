import React, { Component } from 'react';
import './About.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Card from './Card';
import logo from '../logo.png';

const About = () => (

  <div className="about-wrapper">
    <img src={logo} alt="logo" className="logo" />
    <h1 className="title">CLB F-Code</h1>
    <div className="paragraph-wrapper">
      <p className="intro-paragraph">
        F-Code được thành lập vào năm 2014, là CLB học thuật đầu tiên tại trường đại học FPT HCM. Với mục tiêu ban đầu là tạo ra một nơi để các bạn sinh viên ngành kĩ thuật phần mềm, an toàn thông tin có đam mê về lập trình được thỏa sức trao đổi và học tập với nhau. Sau hơn 5 năm hoạt động, CLB đã tạo được nhiều sân chơi cho các bạn sinh viên trường ĐH FPT.
      </p>
      <div className="link-visit">
        <a className="text-link">Tìm hiểu thêm</a>
        <ArrowRightOutlined className="arrow" />
      </div>
    </div>

    <Carousel>
      <Card />
      <Card />
      <Card />
      <Card />

    </Carousel>
  </div>
);

export default About;
