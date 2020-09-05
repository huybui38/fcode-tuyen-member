import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a className="nav-links" onClick={closeMobileMenu}>
                Đăng ký
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CLB F-Code
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Thử thách
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
