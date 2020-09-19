import React from 'react';
import './LoginSection.css';
import logo from './gg-logo.png';

const LoginSection = (props) => (
  <div className="login-section-wrapper">
    <div className="login-section">
      <p>Vui lòng sử dụng mail FPT để đăng nhập</p>
      <div className="google-login-box">
        <span className="google-logo">
          <img src={logo} alt="logo" />
        </span>
        <span className="signin-text">Sign in</span>
      </div>
    </div>
  </div>
);

export default LoginSection;
