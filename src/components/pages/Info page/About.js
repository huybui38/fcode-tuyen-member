import React from 'react';
import HeroSection from './HeroSection';
import {
  homeObjOne, homeObjTwo, homeObjThree, homeObjFour,
} from './Data';

function About() {
  return (
    <div className="about-page-wrapper">
      <HeroSection {...homeObjOne} />

    </div>
  );
}

export default About;
