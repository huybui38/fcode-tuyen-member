import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

function AppFooter() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Tham gia CLB F-Code để có thêm nhiều bạn bè, cùng nhau học tập và vui chơi.
        </p>
        <p className="footer-subscription-text">
          Nếu có thắc mắc, các bạn có thể liên hệ với chúng mình qua link bên dưới.
        </p>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="contact">
            <div className="icons-wrapper">
              <Link to="//www.facebook.com/fcodefpt" target="_blank" className="social-icon-link fb-icon"><FaFacebook /></Link>
              <Link to="//fcodehcm.wordpress.com/" target="_blank" className="social-icon-link web-icon"><CgWebsite /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="website-rights">F-CODE © 2020</div>

    </div>
  );
}

export default AppFooter;
