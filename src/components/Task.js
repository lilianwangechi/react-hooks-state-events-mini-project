import React from "react";


function Task({ text, category, remove }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={remove} data-task={text}>X</button>
    </div>
  );
}

export default Task;
