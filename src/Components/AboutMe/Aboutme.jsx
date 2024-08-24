import React from 'react';
import Lottie from 'react-lottie';
import './aboutme.css';
import AnimationCoder from '../../assets/AnimationAbboutMe.json';
import DummyCL from '../../assets/coverletterDummy.pdf';
import DummyCV from '../../assets/CVdummy.pdf'

const Aboutme = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationCoder,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className="aboutme-container" id="aboutme">
        <div className="aboutme-leftside">
          <Lottie options={defaultOptions} height={500} width={500} className="lootieaboutme" />
          <h3>Downloads</h3>
          <div className="buttonContainer"><a href={DummyCL} download="Sheshan_ferando_CL.pdf"><button>Cover Letter</button></a>
            <a href={DummyCV} download="Sheshan_ferando_CV.pdf"><button>CV</button></a> </div>

        </div>
        <div className="aboutme-rightside">
          <h1 className="Aboutme">About Me</h1>
          <div className="description">
            <p>
              Hi, I'm Sheshan Fernando, a passionate front-end developer with over two years of professional experience in creating dynamic and visually engaging web applications. Originally from Sri Lanka and currently based in Italy, I am 24 years old and pursuing a Bachelor's degree in Artificial Intelligence at the University of Pavia Italy.
              I specialize in a modern tech stack that includes JavaScript, React.js, WordPress, Firebase, HTML, CSS, Git, GitHub, Tailwind CSS and more. My journey as a freelancer has allowed me to hone my skills and deliver high-quality solutions to diverse clients. However, my enthusiasm for front-end development drives me to seek a permanent role where I can contribute my expertise and continue to grow in a collaborative environment.
              I am dedicated to crafting user-centric experiences and leveraging my technical skills to build responsive and interactive web applications. Let's connect and explore how I can bring value to your team!
            </p>
          </div>
        </div>
        <div className="AboutMeMobile">
          <h1>About Me</h1>
          <Lottie options={defaultOptions} height={300} width={300} className="lootieaboutmeMobile" id="aboutme" />
          <h3>Downloads</h3>
          <div className="buttonsMobile">
            <a href={DummyCL} download="Sheshan_ferando_CL.pdf">    <button>Cover Letter</button>
            </a>
            <a href={DummyCV} download="Sheshan_ferando_CV.pdf">            <button>CV</button>
            </a>
          </div>
          <p>
            I'm Sheshan Fernando, a front-end developer with over two years of experience in creating dynamic web applications. Originally from Sri Lanka and now based in Italy, I'm 24 and pursuing a Bachelor's in Artificial Intelligence at the University of Pavia. I specialize in modern tech like JavaScript, React.js, WordPress, and more. My freelancing journey has sharpened my skills, and I'm eager to contribute to a collaborative team in a permanent role. I'm passionate about crafting responsive, user-centric web experiences. Let's connect and explore how I can add value to your team!
          </p>
        </div>

      </div>
    </>
  );
};

export default Aboutme;
