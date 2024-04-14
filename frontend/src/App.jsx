import React from "react";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
