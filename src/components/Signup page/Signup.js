import React, { Component } from 'react';
import './Signup.css';
import logo from '../logo.png';

const Signup = () => (
  <div className="wrapper">
    <div className="overlay-color" />
    <img src={logo} alt="logo" className="logo" />

    <div>
      <div className="greeting">Chào mừng bạn đến với F-Code</div>
      <div className="invitation">Bạn muốn tham gia vào CLB? Hãy đăng ký ngay!</div>
    </div>

    <button className="signup-box" type="button"> Đăng ký tham gia </button>
  </div>
);

export default Signup;
