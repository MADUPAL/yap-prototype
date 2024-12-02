import React from "react";
// import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../providers/ThemeProvider";
import NavbarGrid from "./navbar/NavbarGrid";

const Layout = () => {
  return (
    // <ThemeContextProvider>
    //   <ThemeProvider>
    <div className="container">
      <div className="wrapper">
        {/* <Navbar /> */}
        <NavbarGrid />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
    //    </ThemeProvider>
    //</ThemeContextProvider>
  );
};

export default Layout;
