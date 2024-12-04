import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../features/tasksSlice";
import EditTaskDialog from "./EditTaskDialog";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  return (
    <>
      <Card sx={{ marginBottom: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color={task.isCompleted ? "green" : "error"}
          >
            {task.isCompleted ? "Completed" : "Pending"}
          </Typography>
          <Typography variant="caption" display="block">
            Due Date: {task.dueDate}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="small"
              variant="contained"
              color={task.isCompleted ? "success" : "primary"}
              onClick={() => dispatch(toggleComplete(task.id))}
            >
              {task.isCompleted ? "Completed" : "Mark Complete"}
            </Button>
            <Button
              size="small"
              variant="contained"
              color="info"
              onClick={handleEditOpen}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </Card>
      <EditTaskDialog
        open={isEditOpen}
        handleClose={handleEditClose}
        task={task}
      />
    </>
  );
};

export default TaskCard;
