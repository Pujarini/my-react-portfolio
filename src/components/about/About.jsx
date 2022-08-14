import React from "react";
import Me from "../../images/me.png";
import "./styles.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="Me" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a Software Developer working in frontend for 2+ years now.
        </p>
        <p className="a-desc">
          Pujarini jena is a Software Developer working at an Unicorn Startup.
          She has an experience of 2+ years in Frontend development. She has
          worked on React , JavaScript specifically. I have worked on
          consumer-facing products for 2 geographies at my current company.Prior
          to that I was working on an internal product of my first organisation.
          In her free time she likes to host Twitter spaces related to Developer
          stuff. Apart from that she is also a Technical Blogger.
        </p>
      </div>
    </div>
  );
};

export default About;
