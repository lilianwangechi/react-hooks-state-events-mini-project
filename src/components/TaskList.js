
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemove }) {
  
  return (
    <div className="tasks">
      {tasks.map((task)=>(
      <Task key={task.text}text={task.text} category={task.category} remove={onRemove}/>
      ))}
    </div>
  );
}

export default TaskList;
