import React from "react";
import Note from "../components/Note/Note";
import { ReactFlowProvider } from "@xyflow/react";

const NotePage = () => {
  return (
    <ReactFlowProvider>
      <Note />
    </ReactFlowProvider>
  );
};

export default NotePage;
