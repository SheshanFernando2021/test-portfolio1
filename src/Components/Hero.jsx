import React from 'react';
import Lottie from 'lottie-react';
import Animation1 from '../assets/Animation1.json';
import Animation2 from '../assets/Animation2.json';

const Hero = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100svh',
      }}
    >
      <Lottie animationData={Animation1} style={{ width: 300, height: 300 }} />
      <Lottie animationData={Animation2} style={{ width: 300, height: 300 }} />
    </div>
  );
};

export default Hero;
