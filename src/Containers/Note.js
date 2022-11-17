import React from "react";

export default function Note({ id, text, onClick }) {
  return (
    <li className="Note" key={id} id={id}>
      <button onClick={onClick} className="delete-button" id={id}>
        &times;
      </button>
      {text}{" "}
    </li>
  );
}
