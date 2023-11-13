import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Schedule = ({ tasks }) => {

  const chunks = [];
  const totalHours = 0;

  // slice task if duration is more than 3 hours
  tasks.forEach((tasks) => {
    if (task.duration > 3) {
      let remaining = task.duration - 3;
      const chunk = {name: task.name, duration: 3};
      chunks.push(chunk);

    }
  });

  const dayScheduler = (tasks) => {

  }

  return (
    <Box>
      <Typography variant="h6" component="h1" color="text.primary" textAlign="center">
        Here is the schedule
      </Typography>
      <Paper>
        {tasks &&
          tasks.map((task, index) => (
            <div key={index}>
              <p>{task.name}</p>
              <p>{task.duration}</p>
            </div>
          ))}
      </Paper>
    </Box>
  );
};

export default Schedule;