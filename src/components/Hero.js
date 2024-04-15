import React from 'react'
import vikas from '../Images/vikas.jpeg'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className="hero">
      <img className='hero-img' src={vikas} alt="" />
      <h1> <span className='gradientName' >I am Vikas Kumar</span> </h1>
      <h1>Full Stack Developer From India</h1>
      <p className='hero-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ratione, exercitationem eaque voluptas obcaecati alias. Numquam, aspernatur.  Est similique ipsa facere tempore, porro</p>
    </div>
    <div className="hero-action">
      <button className='cwmc'>Connect with me </button>
      <button className='mr'>My Resume</button>
    </div>
  
    </>
  )
}

export default Hero;
