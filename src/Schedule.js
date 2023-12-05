import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Checkbox } from '@mui/material';
import './styles.css';

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
    <Box className="Schedule">
      <Typography variant="h6" component="h1" color="text.primary" textAlign="center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>
        Here is the schedule
      </Typography>
      <Paper style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f2f2f2' }}>
        {Object.keys(weekdays).map((weekday, index) => (
          <div key={index} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <Typography variant="h6" component="h2" style={{ color: '#3498db' }}>
              {weekdays[weekday].title}
            </Typography>
            <Typography variant="subtitle1" component="p" style={{ color: '#3498db' }}>
              Total Hours Required: {weekdays[weekday].totalHours}
            </Typography>
            {weekdays[weekday].tasks.map((task, taskIndex) => (
              <div key={taskIndex} style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                <Checkbox
                  onChange={(event) => handleTaskCheck(weekday, taskIndex, event.target.checked, task.duration)}
                />
                <Typography variant="body1" component="p" style={{ marginLeft: '6px', color: '#555' }}>
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
