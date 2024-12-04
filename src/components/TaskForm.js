import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import { TextField, Button, Box, Typography } from "@mui/material";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: Date.now(), isCompleted: false }));
    setTask({ title: "", description: "", dueDate: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
        marginBottom: 3,
      }}
    >
      <Typography variant="h6" component="div">
        Add a New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={3}
          margin="normal"
        />
        <TextField
          label="Due Date"
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;
