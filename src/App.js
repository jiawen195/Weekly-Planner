import React, { useState } from 'react';
import TaskList from './TaskList';
import Schedule from './Schedule'
import { Box, Typography, Grid } from '@mui/material';




const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" color="text.primary" textAlign="center">
        Weekly Planner
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={5}>
          <TaskList></TaskList>
        </Grid>
        <Grid item xs={5}>
          <Schedule></Schedule>
        </Grid>
    </Grid>
    </Box>
  );
}

export default App;