import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home"
import "react-toastify/dist/ReactToastify.css";
import LobbyPage from "./pages/LobbyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/lobbyPage" element={<LobbyPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}
