import React from "react";

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  return (
    <div>
      <textarea
        cols={30}
        rows={10}
        placeholder="write here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        // className="nodrag"
      ></textarea>
      <button onClick={saveHandler}>save</button>
    </div>
  );
};

export default CreateNote;
