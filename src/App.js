import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectFormPage from "./pages/ProjectFormPage";

// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element ={<LoginPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/projects/create" element={<ProjectFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;