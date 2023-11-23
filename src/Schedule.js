import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Checkbox } from '@mui/material';

const Schedule = ({ tasks }) => {
  const [weekdays, setWeekdays] = useState({
    Monday: { title: "Monday", totalHours: 0, tasks: [] },
    Tuesday: { title: "Tuesday", totalHours: 0, tasks: [] },
    Wednesday: { title: "Wednesday", totalHours: 0, tasks: [] },
    Thursday: { title: "Thursday", totalHours: 0, tasks: [] },
    Friday: { title: "Friday", totalHours: 0, tasks: [] },
  });

  const totalHours = tasks.reduce((total, task) => total + task.duration, 0);

  useEffect(() => {
    setWeekdays((prevWeekdays) => {
      const updatedWeekdays = { ...prevWeekdays };
  
      for (const weekday of Object.keys(updatedWeekdays)) {
        updatedWeekdays[weekday].totalHours = 0;
        updatedWeekdays[weekday].tasks = [];
      }
  
      const dailyHours = Math.max(totalHours / tasks.length, 10);
  
      for (const task of tasks) {
        for (const weekday of Object.keys(updatedWeekdays)) {
          const data = updatedWeekdays[weekday];
          if (task.duration + data.totalHours <= dailyHours) {
            updatedWeekdays[weekday].totalHours += task.duration;
            updatedWeekdays[weekday].tasks.push(task);
            break;
          }
        }
      }
  
      return updatedWeekdays;
    });
  }, [tasks, totalHours]);
  

  const handleTaskCheck = (weekday, taskIndex, isChecked, duration) => {
    setWeekdays((prevWeekdays) => {
      const updatedWeekdays = { ...prevWeekdays };

      if (isChecked) {
        duration = -duration;
      }

      updatedWeekdays[weekday].totalHours += duration;

      return updatedWeekdays;
    });
  };

  return (
    <Box>
      <Typography variant="h6" component="h1" color="text.primary" textAlign="center">
        Here is the schedule
      </Typography>
      <Paper>
        {Object.keys(weekdays).map((weekday, index) => (
          <div key={index}>
            <Typography variant="h6" component="h2">
              {weekdays[weekday].title}
            </Typography>
            <Typography variant="subtitle1" component="p">
              Total Hours Required: {weekdays[weekday].totalHours}
            </Typography>
            {weekdays[weekday].tasks.map((task, taskIndex) => (
              <div key={taskIndex} style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  onChange={(event) => handleTaskCheck(weekday, taskIndex, event.target.checked, task.duration)}
                />
                <Typography variant="body1" component="p" style={{ marginLeft: '8px' }}>
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
