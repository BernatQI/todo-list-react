import React from "react";
import '../stylesheets/TaskForm.css';

function TaskForm(props) {
  return (
    <form className="task-form">
      <input
        className="task-input"
        type='text'
        placeholder="Type a task..."
        name="text" />
      <button className="task-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;