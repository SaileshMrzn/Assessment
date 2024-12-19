import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
