import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Slider from './Slider';
import images from './images';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: 'flex',

            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <div className="visit-link">
                  <span className="visit-text">Xem thêm</span>
                  <span className="link-arrow"><FaArrowRight /></span>
                </div>

              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <Slider slides={images} autoPlay={2} className="slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
