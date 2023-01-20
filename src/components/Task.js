import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineDelete } from "react-icons/ai";

function Task({ id, text, done, completeTask, deleteTask }) {
  return (
    <div className={done ? 'task-container done' : 'task-container'}>
      <div
        className="task-text"
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div
        className="task-icons-container"
        onClick={() => deleteTask(id)}>
        <AiOutlineDelete className="task-icon" />
      </div>
    </div>
  );
}

export default Task;