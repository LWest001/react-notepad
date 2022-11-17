import React from "react";
import { useState } from "react";
import NotepadContainer from "./NotepadContainer";

export default function NewNote({ value, onChange, onSubmit }) {
  return (
    <form className="NewNote" onSubmit={onSubmit}>
      <textarea
        placeholder="Type a note..."
        type="text"
        onChange={onChange}
        value={value}
      ></textarea>
      <br />
      <input type="submit"></input>
    </form>
  );
}
