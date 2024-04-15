import React from "react";
import Layout from "../Layout/Layout";
import "./About.css";
import vikas from "../Images/vikas.jpeg";
import { NavLink } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
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































      {/* <h1 style={{ textAlign: "center" }}>About Me</h1>
      <div className="about-main">
        <div className="about-me">
          <div className="about-main-photo">
            <img className="about-photo gradient-border" src={vikas} alt="" />
          </div>
          <div className="about-details">
            <div className="about-para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                alias praesentium . Lorem ipsum dolor sit amet.lorem10 Lorem ipsum
                dolor, 
              </p>
              <p>
              incidunt eum laborum explicabo, nemo rerum
                quis ab vitaesit amet consectetur adipisicing elit. Expedita,
                doloremque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                deleniti illum tenetur beatae sint soluta et excepturi sapiente
                ratione earum nihil, sit
              </p>
            </div>
            <div className="about-skills">
              <div className="skill-name">
                <NavLink className="decorNone">HTML,CSS,JAVASCRIPT</NavLink>
                <NavLink className="decorNone">REACT</NavLink>
                <NavLink className="decorNone">NODE JS, EXPRESS JS, MONGODB</NavLink>
                <NavLink className="decorNone">JAVA, C++, PYTHON</NavLink>
              </div>
              <div className="skill-level">
            <p><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></p>
            <p><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></p>
            <p><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></p>
            <p><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <div className="experience">
            <h1 className="gradient-text ">10+</h1>
            <p>Year of Experinces</p>
           
          </div>
          <div className="lakir">
            <h1 className="">|</h1>
          </div>
          <div className="projects">
            <h1 className="gradient-text ">30+</h1>
            <p>Project Completd</p>
          </div>
          <div className="lakir">
            <h1 className="about-lakir">|</h1>
          </div>
          <div className="happyclinet">
            <h1 className="gradient-text ">12+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default About;
