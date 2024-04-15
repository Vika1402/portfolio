import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './Header.css'
const Header = () => {
  return (
    <>
  <div className='nav-div'>
    <div className="logo"><h3>portfolio</h3></div>
    <div className="links">

        <NavLink to='/'  className="decorNone">Home</NavLink>
        <NavLink to='/about' className="decorNone">About Me</NavLink>
        <NavLink to="/service" className="decorNone">Service</NavLink>
        <NavLink to="/portfolio" className="decorNone">Portfolio</NavLink>
        <NavLink to="/contact" className="decorNone">Contact</NavLink>
  
    </div>
    <div className="contact">
   <button className='cwm'>Contact With Me</button>
    </div>
  </div>
      
    </>
  )
}

export default Header
