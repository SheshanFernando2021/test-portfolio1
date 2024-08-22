import React from 'react';
import Lottie from 'lottie-react';
import AnimationLaptop from '../../assets/laptop-cup.json';
import stack from '../../assets/stack4.png';
import TypingEffect from 'react-typing-effect';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-right">
        <h1>Front-End Developer</h1>
        <br />
        <span className="typer-effect">
          <p>
            Hey there, I'm Sheshan Fernando. I'm 24 and specialize in &nbsp;
          </p>
          <TypingEffect
            text="front-end development."
            speed={100}
            eraseSpeed={300}
            typingDelay={10}
            eraseDelay={10}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, count) => <p>{text}</p>}
          />
        </span>

        <hr />
        <br />
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
