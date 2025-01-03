import React, { useState } from "react";
import Note from "../components/Note/Note";
import { ReactFlowProvider } from "@xyflow/react";
import { useGlobalContext } from "../providers/GlobalProvider";

const NotePage = () => {
  const [numOfNotes, setNumOfNotes] = useState(1);
  const addPostPage = () => {
    if (numOfNotes === 4) {
      alert("already full");
    } else {
      setNumOfNotes(numOfNotes + 1);
    }
  };
  const returnNotes = () => {
    switch (numOfNotes) {
      case 1:
        return <Note width="1044px" height="690px" />;
      case 2:
        return (
          <>
            <Note
              width="520px"
              height="690px"
              style={{ marginBottom: "62px" }}
            />
            <Note width="520px" height="690px" />
          </>
        );
      case 3:
        return (
          <>
            <Note
              width="520px"
              height="345px"
              style={{ "margin-bottom": "62px" }}
            />
            <Note
              width="520px"
              height="345px"
              style={{ marginBottom: "62px" }}
            />
            <Note width="520px" height="345px" />
          </>
        );
      case 4:
        return (
          <>
            <Note
              width="520px"
              height="345px"
              style={{ marginBottom: "62px" }}
            />
            <Note
              width="520px"
              height="345px"
              style={{ marginBottom: "62px" }}
            />
            <Note
              width="520px"
              height="345px"
              style={{ marginBottom: "62px" }}
            />
            <Note width="520px" height="345px" />
          </>
        );
      default:
        break;
    }
  };
  return (
    <>
      <button
        style={{
          background: "white",
          borderRadius: "100%",
          padding: "7px",
        }}
        onClick={() => {
          addPostPage();
        }}
      >
        +
      </button>
      <div
        style={{
          display: "flex",
          width: "1044px",
          flexWrap: "wrap",
        }}
      >
        {returnNotes()}
      </div>
    </>
  );
};

export default NotePage;
