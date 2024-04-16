import React from "react";
import Layout from "../Layout/Layout";
import "./About.css";
import vikas from "../Images/vikas.jpeg";

const About = () => {
  return (
    <Layout>
<div className="about">
  <div className="about-title">
    <h1>About Me</h1>
    
  </div>
  <div className="about-section">
    <div className="about-left">
      <img src={vikas} alt="" />
    </div>
    <div className="about-right">
      <div className="about-para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas corrupti impedit sunt, totam placeat, culpa corporis deserunt excepturi aliquid accusantium? Voluptas, corrupti eos?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quam.</p>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>HTML CSS JAVASCRIPT</p> <hr style={{width:"50%"}} />
        </div>
        <div className="about-skill">
          <p>REACT</p> <hr style={{width:"50%"}} />
        </div>
        <div className="about-skill">
          <p>NODE JS, REACT JS, MONGODB</p> <hr style={{width:"50%"}} />
        </div>
        <div className="about-skill">
          <p>JAVA , C++ , PYTHON</p> <hr style={{width:"50%"}} />
        </div>
      </div>
    </div>
  </div>
  <div className="about-achivements">
    <div className="about-achivement">
      <h1>10+</h1>
      <p>years of experience</p>
    </div>
    <hr />
    <div className="about-achivement">
      <h1>23+</h1>
      <p>Project Completed</p>
    </div>
    <hr />
    <div className="about-achivement">
      <h1>12+</h1>
      <p>Happy Clients</p>
    </div>
  </div>
</div>

    </Layout>
  );
};

export default About;
≠≠≠≠≠