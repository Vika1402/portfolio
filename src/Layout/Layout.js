import React from "react";
import NavBar from "../components/NavBar.js";

import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';
import Footer from "../components/Footer";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </div>

        <title>{title}</title>
      </Helmet>
      <NavBar />
      <main style={{ minHeight: "77.5vh" }}> <Toaster />{children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Portfolio",
  description: "mr.vikas protfolio",
  keywords: "lets connect",
  author: "mr.vikas",
};

export default Layout;
