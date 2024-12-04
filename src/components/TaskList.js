import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { Typography, Box } from "@mui/material";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "pending") return !task.isCompleted;
    if (filter === "overdue")
      return new Date(task.dueDate) < new Date() && !task.isCompleted;
    return true; // 'all' case
  });

  return (
    <Box>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <Typography variant="body1" color="text.secondary" align="center">
          No tasks to display.
        </Typography>
      )}
    </Box>
  );
};

export default TaskList;
