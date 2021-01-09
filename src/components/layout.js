import React from "react";
import Helmet from "./helmet";
import NavBar from "./navbar";
import Footer from "./footer";
import "./style.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default Layout;
