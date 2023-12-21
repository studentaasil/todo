import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (text.trim() !== "") {
      setTasks([...tasks, text]);
      setText("");
      console.log(tasks);
    }
  }
  function deleteTask() {}
  function upTask() {}
  function downTask() {}
  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Task ..."
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={upTask}>👆</button>
      <button onClick={downTask}>👇</button>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
}

export default Todo;
