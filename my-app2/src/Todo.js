import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (text.trim() !== "") {
      setTasks((t) => [...t, text]);
      setText("");
      console.log(tasks);
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function upTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function downTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Task ..."
      />
      <button onClick={addTask}>Add Task</button>

      {tasks.map((task, index) => (
        <div key={index} className="task-container">
          <span className="a">{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => upTask(index)}>👆</button>
          <button onClick={() => downTask(index)}>👇</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
