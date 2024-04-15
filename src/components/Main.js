import React from 'react'
import Layout from '../Layout/Layout'
import vikas from '../Images/vikas.jpeg'
import './Main.css'
const Main = () => {
  return (
    <>
    <div className="main">
      <div className="photo">
        <img src={vikas} alt="" />
      </div>
      <div className="details">
        <h1 > <span className="gradient-text " >I am Vikas Kumar</span>, Full Stack</h1>
        
        <h1>developer From India</h1>
      </div>
      <div className="para">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Possimus facilis aspernatur laudantium laboriosam perspiciatis velit ut repellat,</p>
      <p>quod officia molestias magni repudiandae corrupti, dolorum provident tenetur. Perferendis accusantium maiores reprehenderit!</p>
          
      </div>
      <div className="main-buttons">
        <button className="cwm">Contact With Me</button>
        <button className="Mr">My Resume</button>
      </div>
    </div>

    </>
  
  )
}

export default Main
