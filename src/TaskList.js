import React, { useState } from 'react';
import Paper from '@mui/material/Paper';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
  
    const handleAddTask = () => {
      setTasks([...tasks, { name: '', duration: '' }]);
    };
  
    const handleGenerate = () => {
      // Pass 'tasks' to the Schedule component
    };
  
    return (
      <Paper>
        {tasks.map((task, index) => (
          <div key={index}>
            <input type="text" placeholder="Task Name" />
            <input type="text" placeholder="Task Duration" />
          </div>
        ))}
        <button onClick={handleAddTask}>Add Task</button>
        <button onClick={handleGenerate}>Generate</button>
      </Paper>
    );
  };

  export default TaskList;