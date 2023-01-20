import React, { useState } from "react";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const manageChange = e => {
    setInput(e.target.value);
  }

  const manageSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    };

    props.onSubmit(newTask);
  };

  return (
    <form
      className="task-form"
      onSubmit={manageSubmit} >
      <input
        className="task-input"
        type='text'
        placeholder="Type a task..."
        name="text"
        onChange={manageChange} />
      <button className="task-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;