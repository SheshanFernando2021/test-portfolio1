import React from 'react';
import Lottie from 'lottie-react';
import AnimationLaptop from '../../assets/laptop-cup.json';
const Hero = () => {
  return (
    <div>
      <h2>Hello</h2>
      <div>
        <Lottie
          animationData={AnimationLaptop}
          loop={true}
          autoplay={true}
          style={{ width: 320, height: 320 }}
        />
      </div>
    </div>
  );
};

export default Hero;
