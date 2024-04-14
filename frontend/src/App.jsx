import React from "react";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          exact
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
