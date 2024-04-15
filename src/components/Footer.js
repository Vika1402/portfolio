import React from "react";
import "./Footer.css";
import { FaRegUserCircle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaRegUserCircle />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscriber cwmc">Subscriber</div>
        </div>
      </div>
      <hr className="hrh" />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 vikas kumar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy and policy</p>
          <p>Connect with me </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
