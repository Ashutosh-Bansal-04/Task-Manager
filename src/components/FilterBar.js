import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasksSlice";
import { ButtonGroup, Button, Box } from "@mui/material";

const FilterBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  const filters = [
    { label: "All Tasks", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
    { label: "Overdue", value: "overdue" },
  ];

  return (
    <Box sx={{ marginBottom: 3 }}>
      <ButtonGroup variant="outlined" color="primary" aria-label="task filters">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            onClick={() => dispatch(setFilter(filter.value))}
            variant={currentFilter === filter.value ? "contained" : "outlined"}
          >
            {filter.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default FilterBar;
