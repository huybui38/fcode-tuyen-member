import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import { addUser, signInWithGoogle } from '../../../firebase/user';

function onSignIn() {
  signInWithGoogle()
    .then((result) => {
      // ^([\w]*)+\@fpt\.edu\.vn$
      const phone = '012345678';
      const facebook = 'https://www.facebook.com/';
      const sampleUser = {
        email: result.user.email,
        name: result.user.displayName,
        phone,
        facebook,

      };
      console.log(sampleUser);
      addUser(sampleUser);
    })
    .catch((e) => {
      // callback(e);
      console.error(`signIn${e}`);
    });
}

function Home() {
  return (
    <div className="hero-container">
      <h1>Cùng nhau chia sẻ</h1>
      <p>Còn chờ đợi gì nữa, hãy nhanh tay đăng ký nào các bạn</p>
      <div className="hero-btns">
        <Link to="/signup">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            ĐĂNG KÝ
            <div className="back" />
          </Button>

        </Link>

        <Link to="/timeline">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            TIMELINE
          </Button>

        </Link>

      </div>
    </div>
  );
}

export default Home;
