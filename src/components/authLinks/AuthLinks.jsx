import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  //temp
  const status = "NOT_AUTHED";
  return (
    <>
      {status === "NOT_AUTHED" ? (
        <>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
          <Link href="/" className={styles.link}>
            Sign in
          </Link>
        </>
      ) : (
        <>
          <Link href="/login" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">FAQ</Link>
          <Link href="/">Contacts</Link>
          <Link href="/">How it works</Link>
          {status === "NOT_AUTHED" ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/">Sign in</Link>
            </>
          ) : (
            <>
              <Link href="/login">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default AuthLinks;
