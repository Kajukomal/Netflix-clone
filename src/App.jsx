import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Player from "./pages/Player";
const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/" element={<Netflix />} />
    </Routes>
  );
};

export default App;
