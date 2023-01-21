import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TodoList.css';
import Task from "./Task";

function TodoList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  };

  const deleteTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
  }

  const completeTask = id => {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              completeTask={completeTask}
              deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  );
}

export default TodoList;