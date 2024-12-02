import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <img src="/src/images/moon.png" className={styles.toggle_icons} alt="" />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { right: 1, background: "#0f172a" }
            : { left: 1, background: "white" }
        }
      ></div>
      <img src="/src/images/sun.png" className={styles.toggle_icons} alt="" />
    </div>
  );
};

export default ThemeToggle;
