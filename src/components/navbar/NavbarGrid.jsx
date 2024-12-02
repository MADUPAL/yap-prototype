import React from "react";
import styles from "./navbarGrid.module.css";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../authLinks/authLinks";

const NavbarGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/src/images/Logo_white.png" />
        </Link>
      </div>
      <div className={styles.links}>
        {/* <ThemeToggle /> */}
        <Link href="/" className={styles.link}>
          FAQ
        </Link>
        <Link href="/" className={styles.link}>
          Contacts
        </Link>
        <Link href="/" className={styles.link}>
          How it works
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default NavbarGrid;
