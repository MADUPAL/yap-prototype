import React from "react";
import styles from "./board.module.css";
import BoardSidebar from "../sidebar/BoardSidebar";

const Board = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main_grid}>
        <BoardSidebar />

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Board;
