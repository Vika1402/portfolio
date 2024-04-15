import React from "react";
import serviceData from "./serviceData.js"
const Service = () => {
  return (
<div className="services">
  <div className="services-title">
    <h1>My Services</h1>
    
  </div>
  <div className="services-container">
{serviceData.map((service,index)=>{
return <div key={index} className="service-formate">
<h3>{service.sno}</h3>
<h2>{service.s-name}</h2>

</div>

})}
  </div>
</div>


  )
};

export default Service;
