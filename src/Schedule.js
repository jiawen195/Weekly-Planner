import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Schedule = ({ tasks }) => {
  
  const totalHours = tasks.reduce((total, task) => total + task.duration, 0);
  const dailyHours = Math.max(totalHours / tasks.length, 10);
  const weekdays = {
    Monday: { title: "Monday", totalHours: 0, tasks: [] },
    Tuesday: { title: "Tuesday", totalHours: 0, tasks: [] },
    Wednesday: { title: "Wednesday", totalHours: 0, tasks: [] },
    Thursday: { title: "Thursday", totalHours: 0, tasks: [] },
    Friday: { title: "Friday", totalHours: 0, tasks: [] },
  };
  
  const binToDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  for (const task of tasks) {
    for (const weekday of binToDay) {
      const data = weekdays[weekday];
      if (task.duration + data.totalHours <= dailyHours) {
        weekdays[weekday].totalHours += task.duration;
        weekdays[weekday].tasks.push(task);
        console.log(task.duration);
        break;
      }
    }
  }
  
  
  return (
    <Box>
      <Typography variant="h6" component="h1" color="text.primary" textAlign="center">
        Here is the schedule
      </Typography>
      <Paper>
        {binToDay.map((weekday, index) => (
          <div key={index}>
            <Typography variant="h6" component="h2">
              {weekdays[weekday].title}
            </Typography>
            <Typography variant="subtitle1" component="p">
              Total Hours Required: {weekdays[weekday].totalHours}
            </Typography>
            {weekdays[weekday].tasks.map((task, taskIndex) => (
              <div key={taskIndex}>
                <Typography variant="body1" component="p">
                  {`Task ${taskIndex + 1}: ${task.name}, Duration: ${task.duration}`}
                </Typography>
              </div>
            ))}
          </div>
        ))}
      </Paper>
    </Box>
  );
};


export default Schedule;