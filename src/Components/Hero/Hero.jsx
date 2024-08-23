import React from 'react';
import Lottie from 'lottie-react';
import AnimationLaptop from '../../assets/laptop-cup.json';
import stack from '../../assets/stack5.png';
import TypingEffect from 'react-typing-effect';
import Navbar from '../Navbar/Navbar';
import './hero.css';
const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero-right">
          <h1>Front-End Developer</h1>
          <br />
          <span className="typer-effect">
            <p>
              Hey there, I'm Sheshan Fernando. I'm 24 and specialize in &nbsp;
            </p>
            <TypingEffect
              className="TypingEffect"
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
          <div>
            <p>
              This portfolio was built from scratch using React.js, without
              relying on any templates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
