import React from 'react';
import Lottie from 'lottie-react';
import AnimationLaptop from '../../assets/laptop-cup.json';
import stack from '../../assets/stack.png';
import './hero.css';
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-right">
        <h1>Front-End Developer</h1>
        <p>
          Hi, I am Sheshan Fernando. I am a 24 year old young Front-end
          developer
        </p>
        <span className="hero-span">
          <h4>Stack |</h4>
          <img src={stack} alt="" />
        </span>
      </div>
      <div className="hero-left">
        <Lottie
          animationData={AnimationLaptop}
          loop={true}
          autoplay={true}
          style={{ width: 700, height: 700 }}
        />
      </div>
    </div>
  );
};

export default Hero;
