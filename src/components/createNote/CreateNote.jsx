import React from "react";
import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  const [menu, setMenu] = useState('modify');
  const [content, setContent] = useState('');

  return (
    <div>
      <div className="text-center">
        NoteName
      </div>
      <div className='note-menu'>
        <button className='note-menu-button'>postList</button> <button className='note-menu-button'>related</button> search<input className='note-menu-searchbox' />
      </div>
      <div>
       <ReactQuill value={content} onChange={setContent}/>
       <button onClick={saveHandler}>save</button>
      </div>
    </div>
  );
};

export default CreateNote;
