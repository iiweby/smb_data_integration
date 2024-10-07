import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmitRequest from "./components/SubmitRequest";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SubmitRequest />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
