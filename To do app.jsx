import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <>
    <div className="tittle">
        <h1 style={{color:'#48a96a'}}>To-Do Application</h1>
    </div>
    <div className="container">
        
      <div className="header">
        
        <p>Manage your daily tasks efficiently</p>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <span
                className={task.completed ? "completed" : ""}
              >
                {task.text}
              </span>

              <div className="actions">
                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed
                    ? "Undo"
                    : "Complete"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}

export default App;