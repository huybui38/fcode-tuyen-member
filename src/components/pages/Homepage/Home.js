import React from 'react';
import HeroSection from '../../HeroSection';
import {
  homeObjOne, homeObjTwo, homeObjThree, homeObjFour,
} from './Data';
import Pricing from '../../Pricing';
import Button from '../../Button';

function Home() {
  return (
    <div className="hero-container">
      <h1>Cùng nhau chia sẻ</h1>
      <p>Còn chờ đợi gì nữa, hãy nhanh tay đăng ký nào các bạn</p>
      <div>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ĐĂNG KÝ
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          TIMELINE
        </Button>

      </div>
    </div>
  );
}

export default Home;