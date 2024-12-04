import {
  Background,
  Controls,
  Panel,
  ReactFlow,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./note.module.css";
import NoteNode from "../customNodes/NoteNode";
import { v4 as uuid } from "uuid";

const initialNodes = [
  {
    id: uuid(),
    type: "NoteNode",
    position: { x: 15, y: 100 },
    data: { label: "Hello" },
    style: {
      minHeight: "200px",
      minWidth: "200px",
    },
  },
];
const nodeTypes = {
  NoteNode,
};
const Note = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [rfInstance, setRfInstance] = useState(null);

  const onClickAddNode = useCallback(() => {
    const newNode = {
      id: uuid(),
      type: "NoteNode",
      position: {
        x: Math.random() * 700,
        y: Math.random() * 700,
      },
      data: { label: "Hello" },
      style: {
        minHeight: "200px",
        minWidth: "200px",
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNodes(data.nodes);
    }
  }, []);

  useEffect(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem("Notes", JSON.stringify(flow));
    }
  }, [nodes, rfInstance]);
  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        deleteKeyCode={["Delete", "Backspace"]}
        selectionKeyCode={["Shift"]}
        onInit={setRfInstance}
        proOptions={{
          hideAttribution: true,
        }}
      >
        <Background />
        <Controls />
        <Panel>
          <div style={{ padding: "10px", backgroundColor: "white" }}>
            <div onClick={onClickAddNode}>+</div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Note;
