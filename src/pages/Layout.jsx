import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

import './Layout.css';

const Layout = () => {
  return (
    <div className='layout-container'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
