import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Schedule = ({ tasks }) => {
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