import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Box, Typography, Container } from "@mui/material";

const TaskDashboard = () => (
  <Container maxWidth="md" sx={{ padding: 3 }}>
    <Typography
      variant="h4"
      component="div"
      align="center"
      gutterBottom
      sx={{ marginBottom: 4 }}
    >
      Task Management Dashboard
    </Typography>
    <TaskForm />
    <TaskList />
  </Container>
);

export default TaskDashboard;
