import React from "react";
import Layout from "../Layout/Layout.js";
import "./Contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import Footer from "../components/Footer.js";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Lets talk </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              quasi ad at, quam reiciendis corporis harum eligendi asperiores
              voluptate eos sint expedita perferendis eius nobis ipsum quis nemo
              blanditiis suscipit!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <MdMarkEmailRead /> <p>Email Address</p>
              </div>
              <div className="contact-detail">
                <FaLocationDot /> <p>Address</p>
              </div>
              <div className="contact-detail">
                <TbPhoneCall />
                <p>Contact Number</p>
              </div>
            </div>
          </div>
          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your email" />
            <label htmlFor="">Your Email</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="">Write your message here </label>
            <textarea
              type="text"
              name="name"
              placeholder="Enter your message"
            />

            <button type="submit" className="cwmc">
              Submit * Now
            </button>
          </form>
        </div>
      </div>

    </Layout>

  );
};

export default Contact;
