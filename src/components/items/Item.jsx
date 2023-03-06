import React from "react";
import "../items/Item.css";

export default function Item({ name, isDone, onToggle, id, onDelete }) {
  return (
    <div className="item">
      <div className="items">
        <input checked={isDone} type="checkbox" onChange={onToggle} />
        <span>{name}</span>
      </div>
      <button onClick={onDelete} className="btn-delete">
        X
      </button>
    </div>
  );
}
