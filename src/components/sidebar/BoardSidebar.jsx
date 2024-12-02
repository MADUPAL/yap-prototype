import React, { useState } from "react";
import styles from "./boardSidebar.module.css";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

const sidebarData = [
  {
    title: "Notes",
    path: "/playground/note",
  },
  {
    title: "Plans",
    path: "/playground/plan",
  },
  {
    title: "Blackboard",
    path: "/playground/blackboard",
  },
  {
    title: "Feed",
    path: "/playground/feed",
  },
  {
    title: "Schedule",
    path: "/playground/schedule",
  },
];

const BoardSidebar = () => {
  return (
    <nav>
      <ul className={styles.nav_list}>
        {sidebarData.map((item, idx) => {
          return (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) => [
                  clsx(
                    styles.nav_link,
                    isActive ? styles.nav_link_active : null
                  ),
                ]}
              >
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BoardSidebar;
