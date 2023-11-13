import React, { useState } from 'react';
import Paper from '@mui/material/Paper';

const TaskList = ({ onGenerate }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, { name: '', duration: 0 }]);
  };

  const handleGenerate = () => {
    onGenerate(tasks);
    setTasks([]);
  };

  return (
    <Paper>
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Task Name"
            onChange={(e) => {
              const updatedTasks = [...tasks];
              updatedTasks[index].name = e.target.value;
              setTasks(updatedTasks);
            }}
          />
          <input
            type="text"
            placeholder="Task Duration"
            onChange={(e) => {
              const updatedTasks = [...tasks];
              updatedTasks[index].duration = parseInt(e.target.value, 10);
              setTasks(updatedTasks);
            }}
          />
        </div>
      ))}
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleGenerate}>Generate</button>
    </Paper>
  );
};


export default TaskList;
