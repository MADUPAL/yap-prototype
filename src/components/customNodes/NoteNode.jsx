import { memo, useCallback } from "react";
import styles from "./noteNode.module.css";
import { NodeResizer, NodeToolbar, Position } from "@xyflow/react";
import CreateNote from "../createNote/CreateNote";

function NoteNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className={styles.note_node}>
      <NodeResizer
        handleStyle={{
          width: 20,
          height: 20,
          background: "transparent",
          border: "none",
        }}
        lineStyle={{ border: "5px solid transparent" }}
      />

      <CreateNote />
    </div>
  );
}

export default memo(NoteNode);
