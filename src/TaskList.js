import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import './styles.css';

const TaskList = ({ onGenerate }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, { name: '', duration: 0 }]);
  };

  const handleGenerate = () => {
    // Check for tasks with duration > 10 hours
    const invalidTasks = tasks.filter(task => task.duration > 10);

    if (invalidTasks.length > 0) {
      // Display an alert if there are tasks with duration > 10 hours
      alert('Please split task into multiple so that each task has duration less than or equal to 10 hours');
    } else {
      // Call onGenerate only if all tasks have durations <= 10 hours
      onGenerate(tasks);
      setTasks([]);
    }
  };

  return (
    <Paper className="TaskList">
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="text"
            className="input"
            placeholder="Task Name"
            onChange={(e) => {
              const updatedTasks = [...tasks];
              updatedTasks[index].name = e.target.value;
              setTasks(updatedTasks);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="Task Duration"
            onChange={(e) => {
              const updatedTasks = [...tasks];
              updatedTasks[index].duration = parseInt(e.target.value, 10);
              setTasks(updatedTasks);
            }}
          />
        </div>
      ))}
      <button className="button" onClick={handleAddTask}>Add Task</button>
      <button className="button" onClick={handleGenerate}>Generate</button>
    </Paper>
  );
};


export default TaskList;
