import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function NotepadContainer() {
  const [lines, setLines] = useState([]);
  const [defaultMessage, setDefaultMessage] = useState();
  const [noteText, setNoteText] = useState();
  useEffect(() => {
    lines.length
      ? clearDefault()
      : setDefaultMessage(<li key={uuid()}>No notes yet!</li>);
  }, [lines]);
  const handleChange = ({ target }) => {
    setNoteText(target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("helo");
    console.log(e.target.props);
    setLines((prev) => prev.filter((li) => li.props.id != e.target.id));
  };

  const createNote = (text) => {
    const key = uuid();
    return <Note key={key} id={key} text={text} onClick={handleDelete} />;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLines((prev) => [...prev, createNote(noteText)]);
    setNoteText("");
  };

  const clearDefault = () => {
    setDefaultMessage();
  };

  return (
    <div className="NotepadContainer">
      <NewNote
        value={noteText}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleDelete}
      />
      <div className="notes-area-container">
        <div className="pink-line">
          <ul className="notes-area"></ul>
        </div>
        <ul className="notes-area">
          {defaultMessage}
          {lines}
        </ul>
      </div>
    </div>
  );
}
