import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import logo from './logo.png';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Tham gia CLB F-Code để có thêm nhiều bạn bè, cùng nhau học tập, vui chơi.
        </p>
        <p className="footer-subscription-text">
          Nếu có thắc mắc, các bạn có thể liên hệ với chúng mình qua link bên dưới.
        </p>
        <div className="input-areas" />
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">

          <div className="footer-link-items">
            <h2>Liên hệ</h2>
            <Link to="/">f-code/fb</Link>
            <Link to="/">Our website</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="//www.facebook.com/fcodefpt" target="_blank" className="social-icon-link"><FaFacebook /></Link>
            <Link to="//www.youtube.com/channel/UCZyrUXSrQ1AdkomxYz1GvCw" target="_blank" className="social-icon-link"><FaYoutube /></Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={logo} alt="logo" className="logo-footer" />
              F-CODE
            </Link>
          </div>
          <small className="website-rights">F-CODE © 2020</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
