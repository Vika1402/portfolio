import React from "react";
import Layout from "../Layout/Layout.js";
import my_work from "../my_work.js";
import { FaArrowRight } from "react-icons/fa6";
import "./MyWork.css";
const Portfolio = () => {
  return (
    <Layout>
      <div className="mywork">
        <div className="mywork-title">
          <h1> My Latest Work </h1>
        </div>

        <div className="mywork-container">
          {my_work.map((work, idx) => {
            return (
              <img
                key={idx}
                src={work.w_img}
                alt=""
                style={{ height: "200px" }}
              />
            );
          })}
        </div>
        <div className="my-work-show-more">
          <p>Show More</p>
          <p>--></p>
        
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
