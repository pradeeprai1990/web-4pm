import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Login from "./components/pages/Login";
import Layout from "./components/common/Layout";
import Dashboard from "./components/pages/Dashboard";
import AddTestimonial from "./components/pages/testimonial/AddTestimonial";
import ViewTestimonial from "./components/pages/testimonial/ViewTestimonial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path="testimonial">
            <Route path="add" element={<AddTestimonial />} />
            <Route path="view" element={<ViewTestimonial />} />
          </Route>
        </Route>
        <Route path={"/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
