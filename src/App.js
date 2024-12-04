import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import store from "./store";
import TaskDashboard from "./pages/TaskDashboard";

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/tasks" element={<TaskDashboard />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
