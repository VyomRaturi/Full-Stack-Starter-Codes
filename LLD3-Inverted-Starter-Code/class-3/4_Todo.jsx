// Task Overview:
// Build a To-Do List where they can:
//     Add tasks using an input field and button.
//     Remove a task when clicking a delete button next to the task.

import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
  };

  const removeTask = () => {
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter task..."
        style={{marginRight: "10px", padding: "10px"}}
      />
      <button>Add Task</button>

      <ul>
        Display tasks here
      </ul>
    </div>
  );
};

export default ToDoList;