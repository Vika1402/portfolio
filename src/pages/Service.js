import React from "react";
import service_data from "../services_data.js";
import './Service.css'
import { FaArrowRight } from "react-icons/fa6";
import Layout from "../Layout/Layout.js";

const Service = () => {
  return (
    <Layout>
 <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      
      <div className="services-container">
        {service_data.map((service, idx) => {
          return (
            <div key={idx} className="services-formate">
              <h3>{service.sno}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_description}...</p>
              <div className="services-readmore">
              <p>Read More</p>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>

    </Layout>
   
  );
};

export default Service;
