import "@xyflow/react/dist/style.css";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./note.module.css";
import NoteNode from "../customNodes/NoteNode";
import ReactQuill from "react-quill";
import PostList from "../postList/PostList";
import Related from "../related/Related";
import { useGlobalContext } from "../../providers/GlobalProvider";

const Note = (props) => {
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [menu, setMenu] = useState("editor");
  const [postPages, setPostPages] = useState(1);
  const { globalState, setGlobalState } = useGlobalContext();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  /* .ql-editor {
  min-height: 690px; 
  max-height: 690px;
  max-width: 1044px;
}
  */
  const showMenu = () => {
    switch (menu) {
      case "editor":
        return (
          <ReactQuill
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus={isFocused}
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"], // Basic formatting
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }], // Color and background
                [{ font: [] }], // Font families
                [{ align: [] }], // Alignments
                ["clean"], // Remove formatting
                ["link", "image", "video"], // Inserting content
              ],
            }}
            theme="snow"
            style={{
              backgroundColor: "#f0f0f0",
              minHeight: props.height,
              maxHeight: props.height,
              minWidth: props.width,
              overflow: "auto",
              border: "1px solid black",
            }}
          />
        );
      case "postList":
        return (
          <div
            style={{
              backgroundColor: "#f0f0f0",
              minHeight: props.height,
              display: "inline-block",
              minWidth: props.width,
              border: "1px solid black",
            }}
          >
            <PostList page={postPages} />
          </div>
        );
      case "related":
        return (
          <div
            style={{
              backgroundColor: "#f0f0f0",
              minHeight: props.height,
              display: "inline-block",
              minWidth: props.width,
              border: "1px solid black",
            }}
          >
            <Related />
          </div>
        );
    }
  };

  return (
    <div
      style={{
        minHeight: props.height,
        maxHeight: props.height,
        maxWidth: props.width,
      }}
    >
      <div className="text-center" style={{ border: "2px solid black" }}>
        <span className="drag-handle__custom" style={{ color: "white" }}>
          NoteName
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid black",
        }}
      >
        <div className="note-menu">
          <button
            className="note-menu-button"
            onClick={() => {
              setMenu("editor");
            }}
            style={{ fontSize: "25px", width: "100px" }}
          >
            editor
          </button>
          <button
            className="note-menu-button"
            onClick={() => {
              setMenu("postList");
            }}
            style={{ fontSize: "25px", width: "100px" }}
          >
            postList
          </button>
          <button
            className="note-menu-button"
            onClick={() => {
              setMenu("related");
            }}
            style={{ fontSize: "25px", width: "100px" }}
          >
            related
          </button>
          <div style={{ fontSize: "25px" }}>search</div>
          <input className="note-menu-searchbox" />
        </div>
      </div>
      <div>{showMenu()}</div>
    </div>
  );
};

export default Note;
