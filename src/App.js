import React, { useState } from 'react';
import TaskList from './TaskList';
import Schedule from './Schedule'
import { Box, Typography, Grid } from '@mui/material';




const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleGenerate = (taskList) => {
    setTasks(taskList);
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" color="text.primary" textAlign="center">
        Weekly Planner
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6}>
          <TaskList onGenerate={handleGenerate}></TaskList>
        </Grid>
        <Grid item xs={6}>
          <Schedule tasks={tasks}></Schedule>
        </Grid>
    </Grid>
    </Box>
  );
}

export default App;