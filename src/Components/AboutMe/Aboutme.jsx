import React from 'react';
import './aboutme.css';

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-leftside">
        <h1 className="Aboutme">About Me</h1>
        <div className="description">
          <h1>description</h1>
        </div>
        <div className="buttons">
          <h1>Buttons</h1>
        </div>
      </div>
      <div className="aboutme-righttside">
        <div className="animation">
          <h1>Animation</h1>
        </div>
        <div className="skills">
          <h1>Skills</h1>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
