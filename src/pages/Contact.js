import React from "react";
import Layout from "../Layout/Layout.js";
import "./Contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";


const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [ Result,setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2132cfba-2963-434c-b584-89b07751977a");
//remove 123 fpr msg send 
    const response = await fetch("https://api123.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert('Message send successfully ')
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
                <MdMarkEmailRead /> <p>vikaskumarsinha1402@gmail.com</p>
              </div>
              <div className="contact-detail">
                <FaLocationDot /> <p>Raipur</p>
              </div>
              <div className="contact-detail">
                <TbPhoneCall />
                <p>8223842826</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
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
