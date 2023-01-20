import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TodoList.css';
import Task from "./Task";

function TodoList() {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskForm />
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              text={task.text}
              done={task.done} />

          )
        }
      </div>
    </>
  );
}

export default TodoList;